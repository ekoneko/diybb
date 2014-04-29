module.exports = function() {

    /* get */
    this.index = function() {
        var commonConfig = require('../../configs/common.json');
        var id = this.req.params.id;
        // load topic list
        this.res.render('forum/channel.hbs', {
            siteurl: commonConfig.siteurl,
            sitename: commonConfig.sitename,
            current: {
                id: 1,
                name: '板块1',
                page: 1
            },
            topics: [{
                id: 1,
                title: 'watching dog',
                count: 3,
                author: 'kaze'
            }],
            config: {
                size: 10,
                total: 24
            }
        });
    }
};