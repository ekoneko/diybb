(function() {
    diybb.controller('indexController', function($scope) {
        $scope.categorys = [{
            id:1,
            name: '栏目1',
            bcolor: '#ec90ae'
        }, {
            id:2,
            name: '栏目2',
            bcolor: '#86a8e6'
        }];
        $scope.channels = [{
            id: 1,
            category_id: 1,
            name: '=先行者里区=',
            count: 233,
            bcolor: '#efa9c0',
            lastpost: {
                id: 9,
                title: '妖精的珍宝',
                lastpost: 1234567890000,
                author: {
                    id: 51,
                    name: 'kaze'
                }
            }
        }, {
            id: 2,
            category_id: 1,
            name: '=公告区=',
            count: 233,
            bcolor: '#efa9c0',
            lastpost: {}
        }, {
            id: 3,
            category_id: 1,
            name: '=游戏区=',
            count: 233,
            bcolor: '#efa9c0',
            lastpost: {}
        },{
            id: 1,
            category_id: 1,
            name: '=先行者里区=',
            count: 233,
            bcolor: '#efa9c0',
            lastpost: {}
        }, {
            id: 2,
            category_id: 1,
            name: '=公告区=',
            count: 233,
            bcolor: '#efa9c0',
            lastpost: {}
        }];
    });
})();