"use strict";
exports.__esModule = true;
var User_1 = require("./User");
var default_1 = (function () {
    function default_1(data) {
        this.id = data.id;
        this.node_id = data.node_id;
        this.name = data.name;
        this.full_name = data.full_name;
        this.private = data.private;
        this.owner = new User_1["default"](data.owner);
        this.url = data.url;
    }
    return default_1;
}());
exports["default"] = default_1;
//# sourceMappingURL=Repo.js.map