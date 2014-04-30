/*jslint node: true */
(function () {
    'use strict';

    var diybb = require('./core/diybb.js'),
        http = require('http');

    process.env.NODE_ENV = "product";
    process.env.PORT = process.env.PORT || 3000;

    diybb(function (app) {
        http.createServer(app).listen(process.env.PORT, function () {
            console.log('Express server listening on port ' + process.env.PORT);
        });
    });
}());