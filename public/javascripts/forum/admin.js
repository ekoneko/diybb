(function () {
    'use strict';

    /**
     * set topic top
     * @param {int} topicId
     */
    function setTopicTop (topicId) {
        // 
    }

    /**
     * unset topic top
     * @param {int} topicId
     */
    function unsetTopicTop (topicId) {
        //
    }

    /**
     * delete topics
     * @param  {array} topicIds
     */
    function deleteTopics (topicIds) {
        //
    }

    $(function () {
        var pathName;
        pathName = window.location.pathname;
        if (/\/topic\/(\d+)/i.test(pathName)) {
            //
        } else if (/\/channel\/(\d+)/i.test(pathName)) {
            //
        }
    });
}());