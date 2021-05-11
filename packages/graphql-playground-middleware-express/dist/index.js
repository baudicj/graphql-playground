"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_playground_html_patched_1 = require("graphql-playground-html-patched");
var express = function voyagerExpress(options) {
    return function (req, res, next) {
        res.setHeader('Content-Type', 'text/html');
        var playground = graphql_playground_html_patched_1.renderPlaygroundPage(options);
        res.write(playground);
        res.end();
    };
};
exports.default = express;
//# sourceMappingURL=index.js.map