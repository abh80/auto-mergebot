"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Repo_1 = require("./Repo");
var User_1 = require("./User");
var PullRequestReview_1 = require("./PullRequestReview");
var requester = require("../Utils/Requester");
var default_1 = (function () {
    function default_1(data, token) {
        this.url = data.url;
        this.id = data.id;
        this.node_id = data.node_id;
        this.html_url = data.html_url;
        this.issue_url = data.issue_url;
        this.number = data.number;
        this.state = data.state;
        this.locked = data.locked;
        this.title = data.title;
        this.user = new User_1["default"](data.user);
        this.body = data.body;
        this.assignee = data.assignee;
        this.merged = data.merged;
        this.comments = data.comments;
        this.author_association = data.author_association;
        this.base = new Repo_1["default"](data.base.repo);
        this.head = new Repo_1["default"](data.head.repo);
        this.labels = data.labels;
        this.statuses_url = data.statuses_url;
        this.comments_url = data.comments_url;
        this.mergeable_state = data.mergeable_state;
        this.token = token;
    }
    default_1.prototype.checkIfApproved = function (label) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.labels.find(function (x) { return x.name.toLowerCase() === label; }))
                            return [2, true];
                        return [4, requester.get(this.url + "/reviews")];
                    case 1:
                        res = _a.sent();
                        return [2, this.ParseReview(res)];
                }
            });
        });
    };
    default_1.prototype.checkIfMerged = function () {
        return this.merged;
    };
    default_1.prototype.comment = function (text) {
        var body = {
            body: text
        };
        var options = {
            token: this.token,
            body: body,
            method: "POST",
            url: this.comments_url
        };
        requester.request(options);
    };
    default_1.prototype.checkAuthor = function (User) {
        if (this.user.id === User.id)
            return true;
        else
            return false;
    };
    default_1.prototype.checkIfMergable = function () {
        if (this.mergeable_state === "clean")
            return true;
        else
            return false;
    };
    default_1.prototype.merge = function (commit_title) {
        if (!this.checkIfApproved)
            return;
        var options = {
            token: this.token,
            body: {
                commit_title: commit_title
            },
            method: "PUT",
            url: this.url + "/merge"
        };
        requester.request(options);
    };
    default_1.prototype.addLabel = function (label) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                options = {
                    method: "POST",
                    url: this.issue_url + "/labels",
                    token: this.token,
                    body: {
                        labels: [label]
                    }
                };
                requester.request(options);
                return [2];
            });
        });
    };
    default_1.prototype.ParseReview = function (data) {
        for (var i = 0; i < data.length; i++) {
            var PRReview = new PullRequestReview_1["default"](data[i]);
            if (PRReview.state === "APPROVED" &&
                (PRReview.author_association === "OWNER" ||
                    PRReview.author_association === "COLLABORATOR" ||
                    this.author_association === "MEMBER"))
                return true;
        }
    };
    return default_1;
}());
exports["default"] = default_1;
//# sourceMappingURL=PullRequest.js.map