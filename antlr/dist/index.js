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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTruthTable = void 0;
var tree_1 = require("antlr4ts/tree");
var TruthTablesParser_1 = require("./generated/TruthTablesParser");
var antlr4ts_1 = require("antlr4ts");
var TruthTablesLexer_1 = require("./generated/TruthTablesLexer");
var Interval_1 = require("antlr4ts/misc/Interval");
var getFullContextText = function (ctx) { var _a; return (_a = ctx.start.inputStream) === null || _a === void 0 ? void 0 : _a.getText(Interval_1.Interval.of(ctx.start.startIndex, ctx.stop.stopIndex)); };
var StepsVisitor = /** @class */ (function (_super) {
    __extends(StepsVisitor, _super);
    function StepsVisitor(input) {
        var _this = _super.call(this) || this;
        _this.operations = [];
        _this.input = input;
        return _this;
    }
    StepsVisitor.prototype.defaultResult = function () {
        return 0;
    };
    StepsVisitor.prototype.visitProgram = function (ctx) {
        var _a;
        return (_a = ctx.expression()) === null || _a === void 0 ? void 0 : _a.accept(this);
    };
    StepsVisitor.prototype.visitParenthesis = function (ctx) {
        return this.visit(ctx.expression());
    };
    StepsVisitor.prototype.visitBinaryOperation = function (ctx) {
        var value, text;
        var lVal = ctx._left.accept(this);
        var rVal = ctx._right.accept(this);
        if (ctx.binaryOp().OR())
            value = lVal || rVal;
        else if (ctx.binaryOp().AND())
            value = lVal && rVal;
        else if (ctx.binaryOp().EQUIV())
            value = lVal === rVal;
        else if (ctx.binaryOp().XOR())
            value = lVal !== rVal;
        else if (ctx.binaryOp().IMPL()) {
            value = !lVal || (lVal && rVal);
        }
        text = getFullContextText(ctx);
        this.operations.push({
            text: text,
            value: value,
        });
        return value;
    };
    StepsVisitor.prototype.visitVar = function (ctx) {
        return this.input[ctx.text];
    };
    StepsVisitor.prototype.visitValue = function (ctx) {
        if (ctx.text === "0")
            return false;
        else if (ctx.text === "1")
            return true;
        else if (ctx.text.match(/false/i))
            return false;
        return true;
    };
    return StepsVisitor;
}(tree_1.AbstractParseTreeVisitor));
function generateInput(variableNames, inputs) {
    var _a, _b;
    if (variableNames === void 0) { variableNames = []; }
    if (inputs === void 0) { inputs = []; }
    if (!variableNames.length)
        return inputs;
    var currName = variableNames.pop();
    if (!inputs.length) {
        inputs.push((_a = {}, _a[currName] = true, _a));
        inputs.push((_b = {}, _b[currName] = false, _b));
    }
    else {
        inputs.push.apply(inputs, __spread(inputs.reduce(function (acc, curr) {
            acc.push(__assign({}, curr));
            return acc;
        }, [])));
        for (var i = 0; i < inputs.length; i++) {
            inputs[i][currName] = i < inputs.length / 2;
        }
    }
    return generateInput(variableNames, inputs);
}
var generateTruthTable = function (formula) {
    var stream = antlr4ts_1.CharStreams.fromString(formula);
    var lexer = new TruthTablesLexer_1.TruthTablesLexer(stream);
    var commonTokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    var parser = new TruthTablesParser_1.TruthTablesParser(commonTokenStream);
    var tree = parser.program();
    var variableNames = [];
    tree_1.ParseTreeWalker.DEFAULT.walk({
        enterVar: function (ctx) {
            var varId = ctx.text;
            if (variableNames.indexOf(varId) === -1)
                variableNames.push(varId);
        },
    }, tree);
    /*  for (const input of generateInput(variableNames)) {
      const visitor = new StepsVisitor(input);
      const res = visitor.visit(tree);
      console.log(
        `For ${Object.entries(input)
          .map(([varName, value]) => `${varName} = ${value}`)
          .join(" ")}`
      );
      console.log(visitor.operations);
      console.log(res);
    }*/
    return generateInput(variableNames).map(function (input) {
        var visitor = new StepsVisitor(input);
        visitor.visit(tree);
        return { input: input, steps: visitor.operations };
    });
};
exports.generateTruthTable = generateTruthTable;
//# sourceMappingURL=index.js.map