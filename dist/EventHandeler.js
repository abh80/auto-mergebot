"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var events_1 = require("events");
var event = require("eventsource");
var EventHandeler = (function (_super) {
    __extends(EventHandeler, _super);
    function EventHandeler(url) {
        var _this = _super.call(this) || this;
        _this.event = new event(url);
        _this.url = url;
        return _this;
    }
    EventHandeler.prototype.run = function () {
        var _this = this;
        this.event.addEventListener("message", function (msg) {
            var Parsed = JSON.parse(msg.data);
            _this.emit(Parsed["x-github-event"] + "." + Parsed.body.action, Parsed.body);
        });
    };
    return EventHandeler;
}(events_1.EventEmitter));
exports["default"] = EventHandeler;
//# sourceMappingURL=EventHandeler.js.map