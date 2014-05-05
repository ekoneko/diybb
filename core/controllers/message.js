/*jslint node: true */
/*jslint nomen: true */
module.exports = function () {
    'use strict';

    /* get */
    this.get = {
        index : function () {
                
        },
        
        "new" : function () {
            this.res.send(require('../../scaffold/messages.json'));
        }
    };

    /* post */
    this.post = {
        read : function () {
            this.res.send({
                state: true
            });
        }
    };
};