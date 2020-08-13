"use strict";
var ClassHandeler_1 = require("../Classes/ClassHandeler");
module.exports = (function () {
    function class_1(MergeOptions, ClientOptions) {
        this.MergeOptions = MergeOptions;
        this.ClientOptions = ClientOptions;
    }
    class_1.prototype.exec = function (data) {
        var PR = new ClassHandeler_1["default"]._PullRequest(data.pull_request, this.ClientOptions.token);
        if (this.MergeOptions.mentions) {
            PR.comment("@" + PR.user.login + "," + this.MergeOptions.on_create_comment);
        }
        else
            PR.comment(this.MergeOptions.on_create_comment);
    };
    return class_1;
}());
//# sourceMappingURL=pull_request.opened.js.map