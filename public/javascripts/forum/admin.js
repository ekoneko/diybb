(function () {
    'use strict';

    /**
     * set topic top
     * @param {int} topicId
     */
    function setTopicTop (topicId) {
        $.post('/admin/topic/top', {
            id: +topicId,
            set: 1
        }).success(function (res) {
            if (res.state) {
                window.alert('Success');
            } else {
                window.alert('Error: ' + res.error);
            }
        }).error(function () {
            window.alert('Service Error');
        });
    }

    /**
     * unset topic top
     * @param {int} topicId
     */
    function unsetTopicTop (topicId) {
        $.post('/admin/topic/top', {
            id: +topicId,
            set: 0
        }).success(function (res) {
            if (res.state) {
                window.alert('Success');
            } else {
                window.alert('Error: ' + res.error);
            }
        }).error(function () {
            window.alert('Service Error');
        });
    }

    /**
     * delete topics
     * @param  {array} topicIds
     */
    function deleteTopics (topicIds) {
        if (!window.confirm('Confirm to remove?')) {
            return;
        }
        $.post('/admin/topic/delete', {
            ids: topicIds.join(',')
        }).success(function (res) {
            if (res.state) {
                window.alert('Success');
            } else {
                window.alert('Error: ' + res.error);
            }
        }).error(function () {
            window.alert('Service Error');
        });
    }

    $(function () {
        var pathName, managePanel;

        pathName = window.location.pathname;
        if (/\/topic\/(\d+)/i.test(pathName)) {
            if (!window.adminChannel || window.adminChannel.indexOf(window.channelId) === -1) {
                return;
            }
            managePanel = $('<div class="admin-topic-panel"></div>');
            if (isTop) {
                $('<div class="block untop" title="Untop"></div>')
                    .appendTo(managePanel)
                    .on('click', function () {
                        unsetTopicTop(window.topicId);
                    });
            } else {
                $('<div class="block top" title="Top"></div>')
                    .appendTo(managePanel)
                    .on('click', function () {
                        setTopicTop(window.topicId);
                    });
            }
            $('<div class="block delete" title="Delete"></div>')
                .appendTo(managePanel)
                .on('click', function () {
                    deleteTopics([window.topicId]);
                });
            $('body').append(managePanel);
        } else if (/\/channel\/(\d+)/i.test(pathName)) {
            // console.log('channel');
            if (!window.adminChannel || window.adminChannel.indexOf(window.channelId) === -1) {
                return;
            }
        }
    });
}());