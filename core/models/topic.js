module.exports = function() {
    this.table = 'topic';

    this.getNews = function(size, channel, callback) {
        var sql, data;
        size = size || 20;
        sql = 'SELECT * FROM ?? WHERE `state` = "enable"';
        data = [this.getTable()];
        if (channel) {
            sql += ' AND `channel` = ?'
            data.push(Number(channel));
        }
        sql += ' ORDER BY `created` desc LIMIT ?';
        data.push(size);
        this.query(sql, data, callback);
    };
}