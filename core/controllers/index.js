module.exports = function() {

    /* get */
    this.index = function() {
        var commonConfig = require('../../configs/common.json');
        // category list
        // channel list
        // new topic
        this.res.render('forum/index.hbs', {
            siteurl: commonConfig.siteurl,
            sitename: commonConfig.sitename,
        });
    }
};