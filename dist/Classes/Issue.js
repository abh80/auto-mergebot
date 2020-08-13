"use strict";
exports.__esModule = true;
var default_1 = (function () {
    function default_1(data) {
        if (data.pull_request)
            this.pull_request = data.pull_request;
        this.url = data.url;
        this.labels_url = data.labels_url;
        this.comments_url = data.comments_url;
        this.events_url = data.events_url;
        this.html_url = data.html_url;
        this.id = data.id;
        this.node_id = data.node_id;
        this.number = data.number;
        this.title = data.title;
        this.user = data.user;
        this.labels = data.labels;
        this.state = data.state;
        this.locked = data.locked;
        this.assignee = data.assignee;
        this.assignees = data.assignees;
        this.comments = data.comments;
    }
    default_1.prototype.checkIfApproved = function (label) {
        if (this.labels.find(function (x) { return x.name.toLowerCase() === label; }))
            return true;
        else
            return false;
    };
    return default_1;
}());
exports["default"] = default_1;
//# sourceMappingURL=Issue.js.map