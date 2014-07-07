/*jslint node: true */
module.exports = function () {
    'use strict';

    var self = this;

    this.get = {
        account: function () {
            var model = require('../lib/model.js'),
                when = require('when'),
                id = this.req.params.id >>> 0,
                user;

            if (!id) {
                return self.next();
            }
            // get login uesr info
            model.load('user').get(self.req.signedCookies.user)
            .then(function (_user) {
                user = _user;
                if (!user) {
                    throw 'Account expired, log in and try again';
                }
                // get destination user info
                return when.all([
                    model.load('user').get(id),
                    model.load('topic').list({
                        user_id: id
                    }, {
                        orderby: ['created', 'DESC'],
                        limit: 20
                    })
                ]);
            }).then(function (result) {
                var data = result[0],
                    topics = result[1];

                if (data) {
                    self.res.render('forum/user-profile.hbs', {
                        user: user,
                        data: data,
                        topics: topics
                    });
                } else {
                    return self.res.render('forum/error.hbs', {
                        user: user,
                        message: 'user not found or no permission',
                    });
                }
            }).otherwise(function (err) {
                console.error(err);
                err = typeof err === 'string' ? err : 'user not found or no permission';
                return self.res.render('forum/error.hbs', {
                    user: user,
                    message: err,
                });
            });
        },
        exists: function () {
            var model = require('../lib/model.js'),
                name = this.req.query.name,
                where = {};
            
            if (name.indexOf('@') !== -1) {
                where.email = name;
            } else {
                where.name = name;
            }
            model.load('user').list(where, {
                limit: 1
            }).then(function (data) {
                var ret = !!(data && data[0] && data[0].id);
                self.res.send({
                    state: ret
                });
            }).otherwise(function (err) {
                self.res.send({
                    'state': true
                });
            });
        },
        register: function () {
            this.res.render('forum/user-register.hbs');
        },
        login: function () {
            this.res.render('forum/user-login.hbs');
        },
        setting: function () {
            var model = require('../lib/model.js');
            model.load('user').get(self.req.signedCookies.user).then(function (user) {
                if (!user) {
                    throw('Account expired, log in and try again');
                }
                self.res.render('forum/user-setting.hbs', {
                    user: user
                });
            }).otherwise(function (err) {
                return self.res.render('forum/error.hbs', {
                    message: 'Account expired, log in and try again'
                });
            });
        },
        logout: function () {
            this.res.clearCookie('user', {
                signed: true,
                httpOnly: true
            });
            this.res.set('Cache-Control', 'no-cache');
            this.res.redirect(301, '/');
        },
        avatar: function () {
            var userId = self.req.params.id >>> 0,
                path = require('path'),
                imageUrl,
                defaultUrl = path.join(__dirname, '../../public/images/avatar.png');

            if (!userId) {
                return self.res.sendfile(defaultUrl);
            }
            imageUrl = path.join(__dirname, '../../public/images/avatar', userId.toString());
            self.res.sendfile(imageUrl, function (err) {
                if (err) {
                    self.res.sendfile(defaultUrl);
                }
            });
        }
    };

    this.post = {
        login: function () {
            var username = self.req.body.username,
                password = self.req.body.password,
                model = require('../lib/model.js');
            if (!username || !password || password.length !== 32) {
                return self.res.render('forum/error.hbs', {
                    message: 'Form is incomplete'
                });
            }
            model.load('user').login(username, password).then(function (user) {
                if (user) {
                    self.res.cookie('user', user.id.toString(), {
                        signed: true,
                        httpOnly: true
                    });
                    return self.res.render('forum/user-success.hbs', {
                        action: 'Login',
                        user: user
                    });
                } else {
                    return self.res.render('forum/error.hbs', {
                        message: 'Username or password not match'
                    });
                }
            }).otherwise(function (err) {
                console.error(err);
                self.res.render('forum/error.hbs', {
                    message: (typeof err === 'string') ? err : 'Server error, try again'
                });
            });
        },
        register: function () {
            var username = self.req.body.username,
                email = self.req.body.email,
                password = self.req.body.password,
                validator = require('validator'),
                model = require('../lib/model.js'),
                fn = require('../lib/function.js'),
                nameLength = fn.countCharacters(username),
                err;

            if (!validator.isEmail(email)) {
                err = 'Email format error';
            }
            if (password.length !== 32) {
                err = 'Length of password is not fit';
            }
            if (nameLength < 3 || nameLength > 15) {
                err = 'Length of username is not fit';
            }

            if (err) {
                return self.res.render('forum/error.hbs', {
                    message: err
                });
            }
            model.load('user').list({
                email: email,
                name: username
            }, {
                limit: 1
            }).then(function (data) {
                if (data && data.length) {
                    return self.res.render('forum/error.hbs', {
                        message: 'Email or username has been exists'
                    });
                }
                return model.load('user').add({
                    email: email,
                    name: username,
                    password: password
                });
            }).then(function (result) {
                self.res.cookie('user', result.insertId.toString(), {
                    signed: true,
                    httpOnly: true
                });
                self.res.render('forum/user-success.hbs', {
                    action: 'Register',
                    register: true,
                    user: {
                        id: result.insertId,
                        name: username
                    }
                });
            }).otherwise(function (err) {
                console.error(err);
                self.res.render('forum/error.hbs', {
                    message: (typeof err === 'string') ? err : 'Server error, try again'
                });
            });

        },
        setting: function () {
            var model = require('../lib/model.js'),
                data = {};
            if (self.req.body.password) {
                data.password = self.req.body.password;
            }
            model.load('user').get(self.req.signedCookies.user).then(function (user) {
                if (!user) {
                    throw('Account expired, log in and try again');
                }
                return model.load('user').edit({
                    'id': user.id
                }, data);
            }).then(function () {
                self.res.send({
                    state: true
                });
            }).otherwise(function (err) {
                self.res.send({
                    state: false,
                    error: (typeof err === 'string') ? self.res.__(err) : 'Server error, try again'
                });
            });
        },
        avatar: function () {
            var tmpPath = self.req.files.avatar.path,
                path = require('path'),
                fs = require('fs'),
                gm = require('gm').subClass({imageMagick: true}),
                image,
                dest,
                user = self.req.signedCookies.user >>> 0;
            if (!user) {
                return self.res.send({
                    state: false,
                    error: self.res.__('Account expired, log in and try again')
                });
            }
            dest = path.join(__dirname, '../../public/images/avatar', user.toString());
            if (self.req.files.avatar.size > 1024000) {
                return self.res.send({
                    state: false,
                    error: self.res.__('Upload file is too large')
                });
            }
            image = gm(tmpPath).size(function (err, size) {
                if (err) {
                    console.error(err);
                    fs.unlink(tmpPath);
                    return self.res.send({
                        state: false,
                        error: self.res.__('Server error, try again')
                    });
                }
                var width, height;
                if (size.width > size.height) {
                    height = 100;
                    width = size.width / size.height * 100;
                } else {
                    width = 100;
                    height = size.height / size.width * 100;
                }
                image.resize(width, height).crop(0, 0, 100, 100).write(dest, function (err) {
                    fs.unlink(tmpPath);
                    if (err) {
                        return self.res.send({
                            state: false,
                            error: self.res.__('Server error, try again')
                        });
                    }
                    self.res.send({
                        state: true
                    });
                });
            });
        }
    };
};