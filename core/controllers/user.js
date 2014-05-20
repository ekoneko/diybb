/*jslint node: true */
module.exports = function () {
    'use strict';

    var self = this;

    this.get = {
        account: function () {
            var model = require('../lib/model.js'),
                id = this.req.params.id >>> 0;
            if (!id) {
                return self.next();
            }
            model.load('user').get(id).then(function (data) {
                if (data) {
                    self.res.render('forum/user-profile.hbs');
                } else {
                    return self.res.render('forum/error.hbs', {
                        message: 'user not found or no permission'
                    });
                    self.res.send('user not exists');
                }
            }).otherwise(function (err) {
                self.next();
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
                console.log(ret);
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
            // TODO
            this.res.send('setting');
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
                self.res.sendfile(defaultUrl);
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
                err = 'Length of username is not fit'
            }

            if (err) {
                return self.res.render('forum/error.hbs', {
                    message: err
                })
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
        edit: function () {
            //
        }
    };
};