"use strict";
/* eslint-disable */
// @ts-nocheck
// Generated from ./TruthTables.g4 by ANTLR 4.7.3-SNAPSHOT
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnaryOpContext = exports.BinaryOpContext = exports.VarContext = exports.ValueContext = exports.BinaryOperationContext = exports.UnaryOperationContext = exports.ParenthesisContext = exports.ExpressionContext = exports.ProgramContext = exports.TruthTablesParser = void 0;
var ATN_1 = require("antlr4ts/atn/ATN");
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = __importStar(require("antlr4ts/misc/Utils"));
var TruthTablesParser = /** @class */ (function (_super) {
    __extends(TruthTablesParser, _super);
    function TruthTablesParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(TruthTablesParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(TruthTablesParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return TruthTablesParser.VOCABULARY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TruthTablesParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "TruthTables.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TruthTablesParser.prototype, "ruleNames", {
        // @Override
        get: function () { return TruthTablesParser.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TruthTablesParser.prototype, "serializedATN", {
        // @Override
        get: function () { return TruthTablesParser._serializedATN; },
        enumerable: false,
        configurable: true
    });
    // @RuleVersion(0)
    TruthTablesParser.prototype.program = function () {
        var _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, TruthTablesParser.RULE_program);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 9;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TruthTablesParser.NEG) | (1 << TruthTablesParser.VALUE) | (1 << TruthTablesParser.L_BRACKET) | (1 << TruthTablesParser.VAR))) !== 0)) {
                    {
                        this.state = 8;
                        this.expression(0);
                    }
                }
                this.state = 11;
                this.match(TruthTablesParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TruthTablesParser.prototype.expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 2;
        this.enterRecursionRule(_localctx, 2, TruthTablesParser.RULE_expression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 23;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TruthTablesParser.L_BRACKET:
                        {
                            _localctx = new ParenthesisContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 14;
                            this.match(TruthTablesParser.L_BRACKET);
                            this.state = 15;
                            this.expression(0);
                            this.state = 16;
                            this.match(TruthTablesParser.R_BRACKET);
                        }
                        break;
                    case TruthTablesParser.NEG:
                        {
                            _localctx = new UnaryOperationContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 18;
                            _localctx._op = this.unaryOp();
                            this.state = 19;
                            this.expression(4);
                        }
                        break;
                    case TruthTablesParser.VALUE:
                        {
                            _localctx = new ValueContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 21;
                            this.match(TruthTablesParser.VALUE);
                        }
                        break;
                    case TruthTablesParser.VAR:
                        {
                            _localctx = new VarContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 22;
                            this.match(TruthTablesParser.VAR);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 31;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new BinaryOperationContext(new ExpressionContext(_parentctx, _parentState));
                                _localctx._left = _prevctx;
                                this.pushNewRecursionContext(_localctx, _startState, TruthTablesParser.RULE_expression);
                                this.state = 25;
                                if (!(this.precpred(this._ctx, 3))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                }
                                this.state = 26;
                                _localctx._op = this.binaryOp();
                                this.state = 27;
                                _localctx._right = this.expression(4);
                            }
                        }
                    }
                    this.state = 33;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TruthTablesParser.prototype.binaryOp = function () {
        var _localctx = new BinaryOpContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, TruthTablesParser.RULE_binaryOp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 34;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TruthTablesParser.AND) | (1 << TruthTablesParser.OR) | (1 << TruthTablesParser.XOR) | (1 << TruthTablesParser.IMPL) | (1 << TruthTablesParser.EQUIV))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TruthTablesParser.prototype.unaryOp = function () {
        var _localctx = new UnaryOpContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, TruthTablesParser.RULE_unaryOp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 36;
                this.match(TruthTablesParser.NEG);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    TruthTablesParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 1:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    };
    TruthTablesParser.prototype.expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 3);
        }
        return true;
    };
    Object.defineProperty(TruthTablesParser, "_ATN", {
        get: function () {
            if (!TruthTablesParser.__ATN) {
                TruthTablesParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(TruthTablesParser._serializedATN));
            }
            return TruthTablesParser.__ATN;
        },
        enumerable: false,
        configurable: true
    });
    TruthTablesParser.AND = 1;
    TruthTablesParser.OR = 2;
    TruthTablesParser.XOR = 3;
    TruthTablesParser.IMPL = 4;
    TruthTablesParser.EQUIV = 5;
    TruthTablesParser.NEG = 6;
    TruthTablesParser.VALUE = 7;
    TruthTablesParser.L_BRACKET = 8;
    TruthTablesParser.R_BRACKET = 9;
    TruthTablesParser.VAR = 10;
    TruthTablesParser.WS = 11;
    TruthTablesParser.RULE_program = 0;
    TruthTablesParser.RULE_expression = 1;
    TruthTablesParser.RULE_binaryOp = 2;
    TruthTablesParser.RULE_unaryOp = 3;
    // tslint:disable:no-trailing-whitespace
    TruthTablesParser.ruleNames = [
        "program", "expression", "binaryOp", "unaryOp",
    ];
    TruthTablesParser._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "'('", "')'",
    ];
    TruthTablesParser._SYMBOLIC_NAMES = [
        undefined, "AND", "OR", "XOR", "IMPL", "EQUIV", "NEG", "VALUE", "L_BRACKET",
        "R_BRACKET", "VAR", "WS",
    ];
    TruthTablesParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(TruthTablesParser._LITERAL_NAMES, TruthTablesParser._SYMBOLIC_NAMES, []);
    TruthTablesParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r)\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x05\x02\f\n\x02" +
        "\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x05\x03\x1A\n\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x07\x03 \n\x03\f\x03\x0E\x03#\v\x03\x03\x04\x03\x04\x03\x05\x03\x05" +
        "\x03\x05\x02\x02\x03\x04\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x03\x03" +
        "\x02\x03\x07\x02)\x02\v\x03\x02\x02\x02\x04\x19\x03\x02\x02\x02\x06$\x03" +
        "\x02\x02\x02\b&\x03\x02\x02\x02\n\f\x05\x04\x03\x02\v\n\x03\x02\x02\x02" +
        "\v\f\x03\x02\x02\x02\f\r\x03\x02\x02\x02\r\x0E\x07\x02\x02\x03\x0E\x03" +
        "\x03\x02\x02\x02\x0F\x10\b\x03\x01\x02\x10\x11\x07\n\x02\x02\x11\x12\x05" +
        "\x04\x03\x02\x12\x13\x07\v\x02\x02\x13\x1A\x03\x02\x02\x02\x14\x15\x05" +
        "\b\x05\x02\x15\x16\x05\x04\x03\x06\x16\x1A\x03\x02\x02\x02\x17\x1A\x07" +
        "\t\x02\x02\x18\x1A\x07\f\x02\x02\x19\x0F\x03\x02\x02\x02\x19\x14\x03\x02" +
        "\x02\x02\x19\x17\x03\x02\x02\x02\x19\x18\x03\x02\x02\x02\x1A!\x03\x02" +
        "\x02\x02\x1B\x1C\f\x05\x02\x02\x1C\x1D\x05\x06\x04\x02\x1D\x1E\x05\x04" +
        "\x03\x06\x1E \x03\x02\x02\x02\x1F\x1B\x03\x02\x02\x02 #\x03\x02\x02\x02" +
        "!\x1F\x03\x02\x02\x02!\"\x03\x02\x02\x02\"\x05\x03\x02\x02\x02#!\x03\x02" +
        "\x02\x02$%\t\x02\x02\x02%\x07\x03\x02\x02\x02&\'\x07\b\x02\x02\'\t\x03" +
        "\x02\x02\x02\x05\v\x19!";
    return TruthTablesParser;
}(Parser_1.Parser));
exports.TruthTablesParser = TruthTablesParser;
var ProgramContext = /** @class */ (function (_super) {
    __extends(ProgramContext, _super);
    function ProgramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramContext.prototype.EOF = function () { return this.getToken(TruthTablesParser.EOF, 0); };
    ProgramContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ProgramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TruthTablesParser.RULE_program; },
        enumerable: false,
        configurable: true
    });
    // @Override
    ProgramContext.prototype.enterRule = function (listener) {
        if (listener.enterProgram) {
            listener.enterProgram(this);
        }
    };
    // @Override
    ProgramContext.prototype.exitRule = function (listener) {
        if (listener.exitProgram) {
            listener.exitProgram(this);
        }
    };
    // @Override
    ProgramContext.prototype.accept = function (visitor) {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgramContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgramContext = ProgramContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TruthTablesParser.RULE_expression; },
        enumerable: false,
        configurable: true
    });
    ExpressionContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return ExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionContext = ExpressionContext;
var ParenthesisContext = /** @class */ (function (_super) {
    __extends(ParenthesisContext, _super);
    function ParenthesisContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ParenthesisContext.prototype.L_BRACKET = function () { return this.getToken(TruthTablesParser.L_BRACKET, 0); };
    ParenthesisContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ParenthesisContext.prototype.R_BRACKET = function () { return this.getToken(TruthTablesParser.R_BRACKET, 0); };
    // @Override
    ParenthesisContext.prototype.enterRule = function (listener) {
        if (listener.enterParenthesis) {
            listener.enterParenthesis(this);
        }
    };
    // @Override
    ParenthesisContext.prototype.exitRule = function (listener) {
        if (listener.exitParenthesis) {
            listener.exitParenthesis(this);
        }
    };
    // @Override
    ParenthesisContext.prototype.accept = function (visitor) {
        if (visitor.visitParenthesis) {
            return visitor.visitParenthesis(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParenthesisContext;
}(ExpressionContext));
exports.ParenthesisContext = ParenthesisContext;
var UnaryOperationContext = /** @class */ (function (_super) {
    __extends(UnaryOperationContext, _super);
    function UnaryOperationContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    UnaryOperationContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    UnaryOperationContext.prototype.unaryOp = function () {
        return this.getRuleContext(0, UnaryOpContext);
    };
    // @Override
    UnaryOperationContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryOperation) {
            listener.enterUnaryOperation(this);
        }
    };
    // @Override
    UnaryOperationContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryOperation) {
            listener.exitUnaryOperation(this);
        }
    };
    // @Override
    UnaryOperationContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryOperation) {
            return visitor.visitUnaryOperation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryOperationContext;
}(ExpressionContext));
exports.UnaryOperationContext = UnaryOperationContext;
var BinaryOperationContext = /** @class */ (function (_super) {
    __extends(BinaryOperationContext, _super);
    function BinaryOperationContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BinaryOperationContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    BinaryOperationContext.prototype.binaryOp = function () {
        return this.getRuleContext(0, BinaryOpContext);
    };
    // @Override
    BinaryOperationContext.prototype.enterRule = function (listener) {
        if (listener.enterBinaryOperation) {
            listener.enterBinaryOperation(this);
        }
    };
    // @Override
    BinaryOperationContext.prototype.exitRule = function (listener) {
        if (listener.exitBinaryOperation) {
            listener.exitBinaryOperation(this);
        }
    };
    // @Override
    BinaryOperationContext.prototype.accept = function (visitor) {
        if (visitor.visitBinaryOperation) {
            return visitor.visitBinaryOperation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BinaryOperationContext;
}(ExpressionContext));
exports.BinaryOperationContext = BinaryOperationContext;
var ValueContext = /** @class */ (function (_super) {
    __extends(ValueContext, _super);
    function ValueContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ValueContext.prototype.VALUE = function () { return this.getToken(TruthTablesParser.VALUE, 0); };
    // @Override
    ValueContext.prototype.enterRule = function (listener) {
        if (listener.enterValue) {
            listener.enterValue(this);
        }
    };
    // @Override
    ValueContext.prototype.exitRule = function (listener) {
        if (listener.exitValue) {
            listener.exitValue(this);
        }
    };
    // @Override
    ValueContext.prototype.accept = function (visitor) {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValueContext;
}(ExpressionContext));
exports.ValueContext = ValueContext;
var VarContext = /** @class */ (function (_super) {
    __extends(VarContext, _super);
    function VarContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    VarContext.prototype.VAR = function () { return this.getToken(TruthTablesParser.VAR, 0); };
    // @Override
    VarContext.prototype.enterRule = function (listener) {
        if (listener.enterVar) {
            listener.enterVar(this);
        }
    };
    // @Override
    VarContext.prototype.exitRule = function (listener) {
        if (listener.exitVar) {
            listener.exitVar(this);
        }
    };
    // @Override
    VarContext.prototype.accept = function (visitor) {
        if (visitor.visitVar) {
            return visitor.visitVar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarContext;
}(ExpressionContext));
exports.VarContext = VarContext;
var BinaryOpContext = /** @class */ (function (_super) {
    __extends(BinaryOpContext, _super);
    function BinaryOpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BinaryOpContext.prototype.AND = function () { return this.tryGetToken(TruthTablesParser.AND, 0); };
    BinaryOpContext.prototype.OR = function () { return this.tryGetToken(TruthTablesParser.OR, 0); };
    BinaryOpContext.prototype.XOR = function () { return this.tryGetToken(TruthTablesParser.XOR, 0); };
    BinaryOpContext.prototype.IMPL = function () { return this.tryGetToken(TruthTablesParser.IMPL, 0); };
    BinaryOpContext.prototype.EQUIV = function () { return this.tryGetToken(TruthTablesParser.EQUIV, 0); };
    Object.defineProperty(BinaryOpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TruthTablesParser.RULE_binaryOp; },
        enumerable: false,
        configurable: true
    });
    // @Override
    BinaryOpContext.prototype.enterRule = function (listener) {
        if (listener.enterBinaryOp) {
            listener.enterBinaryOp(this);
        }
    };
    // @Override
    BinaryOpContext.prototype.exitRule = function (listener) {
        if (listener.exitBinaryOp) {
            listener.exitBinaryOp(this);
        }
    };
    // @Override
    BinaryOpContext.prototype.accept = function (visitor) {
        if (visitor.visitBinaryOp) {
            return visitor.visitBinaryOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BinaryOpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BinaryOpContext = BinaryOpContext;
var UnaryOpContext = /** @class */ (function (_super) {
    __extends(UnaryOpContext, _super);
    function UnaryOpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnaryOpContext.prototype.NEG = function () { return this.getToken(TruthTablesParser.NEG, 0); };
    Object.defineProperty(UnaryOpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TruthTablesParser.RULE_unaryOp; },
        enumerable: false,
        configurable: true
    });
    // @Override
    UnaryOpContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryOp) {
            listener.enterUnaryOp(this);
        }
    };
    // @Override
    UnaryOpContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryOp) {
            listener.exitUnaryOp(this);
        }
    };
    // @Override
    UnaryOpContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryOp) {
            return visitor.visitUnaryOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryOpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnaryOpContext = UnaryOpContext;
//# sourceMappingURL=TruthTablesParser.js.map