"use strict";
exports.__esModule = true;
var User_1 = require("./User");
var default_1 = (function () {
    function default_1(data) {
        this.url = data.url;
        this.issue_url = data.issue_url;
        this.html_url = data.html_url;
        this.id = data.id;
        this.node_id = data.node_id;
        this.user = new User_1["default"](data.user);
        this.body = data.body;
    }
    return default_1;
}());
exports["default"] = default_1;
//# sourceMappingURL=IssueComment.js.map