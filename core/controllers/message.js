/*jslint node: true */
/*jslint nomen: true */
module.exports = function () {
    'use strict';

    /* get */
    this.index = function () {
            
    };
    
    this['new'] = function () {
        this.res.send(require('../../scaffold/messages.json'));
    };

    /* post */
    this.read = function () {
        this.res.send({
            state: true
        });
    };
};