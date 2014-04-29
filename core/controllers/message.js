module.exports = function() {

    /* get */
    this.list = function() {
        this.res.send({
            total: 12,
            data: [{
                id: 1,
                title: '消息1'
            }, {
                id: 2,
                title: '消息2'
            }]
        });
    }
};