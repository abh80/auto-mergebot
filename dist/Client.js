"use strict";
exports.__esModule = true;
var EventHandeler_1 = require("./EventHandeler");
var Client = (function () {
    function Client(ClientOptions, MergeOptions) {
        if (!ClientOptions.Smee_io)
            throw new Error("No smee.io url was provided");
        if (!ClientOptions.token)
            throw new Error("No Token was provided");
        if (!MergeOptions.approve_label)
            throw new Error("No Approve label was provided");
        if (!MergeOptions.merge_ask_comment)
            throw new Error("No Merge Ask comment was provided");
        if (!MergeOptions.merge_confirm_comment)
            throw new Error("No Merge confirm comment was provided");
        if (!MergeOptions.on_create_comment)
            throw new Error("No On create comment was provided");
        this.token = ClientOptions.token;
        this.ClientOptions = ClientOptions;
        this.MergeOptions = MergeOptions;
        this._initialize();
    }
    Client.prototype._initialize = function () {
        var _this = this;
        this.EventHandeler = new EventHandeler_1["default"](this.ClientOptions.Smee_io);
        this.EventHandeler.run();
        var events = ["pull_request.opened", "issue_comment.created", 'pull_request_review.submitted'];
        console.log("Client Started Running");
        events.forEach(function (event) {
            var eventFile = new (require("./events/" + event))(_this.MergeOptions, _this.ClientOptions);
            _this.EventHandeler.on(event, function (Parsed) { return eventFile.exec(Parsed); });
        });
    };
    return Client;
}());
exports["default"] = Client;
//# sourceMappingURL=Client.js.map