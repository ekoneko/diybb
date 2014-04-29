module.exports = function() {

    /* get */
    this.index = function() {
        var commonConfig = require('../../configs/common.json');
        var id = this.req.params.id;
        this.res.render('forum/topic.hbs', {
            siteurl: commonConfig.siteurl,
            sitename: commonConfig.sitename,
            id: 1,
            title: 'test'
        });
    }

    /* post */
    this.add = function() {

    }

    this.edit = function() {
        
    }
}