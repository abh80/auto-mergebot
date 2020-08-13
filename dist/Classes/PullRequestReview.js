"use strict";
exports.__esModule = true;
var User_1 = require("./User");
var default_1 = (function () {
    function default_1(data) {
        this.id = data.id;
        this.node_id = data.node_id;
        this.user = new User_1["default"](data.user);
        this.body = data.body;
        this.state = data.state;
        this.pull_request_url = data.pull_request_url;
        this.author_association = data.author_association;
    }
    default_1.prototype.checkToBeApproved = function () {
        if (this.state.toUpperCase() !== 'APPROVED')
            return false;
        if (this.author_association === 'OWNER' || this.author_association === 'COLLABORATOR')
            return true;
        else
            return false;
    };
    return default_1;
}());
exports["default"] = default_1;
//# sourceMappingURL=PullRequestReview.js.map