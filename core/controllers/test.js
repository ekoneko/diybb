module.exports = function() {
    
    this.index = function() {
        this.res.cookie('name', 'value', {signed: true})
        this.res.send('get cookie');
    }
};