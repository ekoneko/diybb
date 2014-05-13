/*jslint node: true */
module.exports = function () {
    'use strict';
    
    var self = this;

    this.get = {
        template: function () {
            self.res.render('forum/comment.hbs');
        },
        data: function () {
            // var 
        }
    };

    this.post = {
        post: function () {

        }
    }
};