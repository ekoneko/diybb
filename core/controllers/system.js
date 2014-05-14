/*jslint node: true */
module.exports = function () {
    'use strict';

    this.get = {
        imageuploader : function () {
            var commonConfig = require('../../configs/common.json'),
                uploadConfig = require('../../configs/imageuploader.json'),
                url = require('url'),
                redirectUrl;
            if (!uploadConfig.apiUrl) {
                return this.res.render('forum/uploader-unsupport.hbs');
            }
            redirectUrl = url.resolve(commonConfig.siteurl, 'system/imageupredirect');
            redirectUrl = encodeURIComponent(redirectUrl);
            this.res.redirect(301, url.resolve(uploadConfig.apiUrl, '?redirect_url=' + redirectUrl));
        },
        imageupallowed : function () {
            var uploadConfig = require('../../configs/imageuploader.json');
            this.res.send({
                state : !!uploadConfig.apiUrl
            });
        },
        imageupredirect : function () {
            var data = {};
            if (this.req.query.err) {
                data.err = this.req.query.err;
            }
            if (this.req.query.url) {
                data.url = this.req.query.url;
            }
            this.res.render('forum/uploader-result.hbs', data);
        }
    };

    this.post = {
        //
    };
};