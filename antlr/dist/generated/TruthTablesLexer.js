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
exports.TruthTablesLexer = void 0;
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var Lexer_1 = require("antlr4ts/Lexer");
var LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = __importStar(require("antlr4ts/misc/Utils"));
var TruthTablesLexer = /** @class */ (function (_super) {
    __extends(TruthTablesLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function TruthTablesLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(TruthTablesLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(TruthTablesLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return TruthTablesLexer.VOCABULARY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TruthTablesLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "TruthTables.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TruthTablesLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return TruthTablesLexer.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TruthTablesLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return TruthTablesLexer._serializedATN; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TruthTablesLexer.prototype, "channelNames", {
        // @Override
        get: function () { return TruthTablesLexer.channelNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TruthTablesLexer.prototype, "modeNames", {
        // @Override
        get: function () { return TruthTablesLexer.modeNames; },
        enumerable: false,
        configurable: true
    });
    // @Override
    TruthTablesLexer.prototype.action = function (_localctx, ruleIndex, actionIndex) {
        switch (ruleIndex) {
            case 3:
                this.IMPL_action(_localctx, actionIndex);
                break;
        }
    };
    TruthTablesLexer.prototype.IMPL_action = function (_localctx, actionIndex) {
        switch (actionIndex) {
            case 0:
                this._text = "=>";
                break;
        }
    };
    Object.defineProperty(TruthTablesLexer, "_ATN", {
        get: function () {
            if (!TruthTablesLexer.__ATN) {
                TruthTablesLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(TruthTablesLexer._serializedATN));
            }
            return TruthTablesLexer.__ATN;
        },
        enumerable: false,
        configurable: true
    });
    TruthTablesLexer.AND = 1;
    TruthTablesLexer.OR = 2;
    TruthTablesLexer.XOR = 3;
    TruthTablesLexer.IMPL = 4;
    TruthTablesLexer.EQUIV = 5;
    TruthTablesLexer.NEG = 6;
    TruthTablesLexer.VALUE = 7;
    TruthTablesLexer.L_BRACKET = 8;
    TruthTablesLexer.R_BRACKET = 9;
    TruthTablesLexer.VAR = 10;
    TruthTablesLexer.WS = 11;
    // tslint:disable:no-trailing-whitespace
    TruthTablesLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    TruthTablesLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    TruthTablesLexer.ruleNames = [
        "AND", "OR", "XOR", "IMPL", "EQUIV", "NEG", "VALUE", "L_BRACKET", "R_BRACKET",
        "VAR", "WS", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
        "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    ];
    TruthTablesLexer._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "'('", "')'",
    ];
    TruthTablesLexer._SYMBOLIC_NAMES = [
        undefined, "AND", "OR", "XOR", "IMPL", "EQUIV", "NEG", "VALUE", "L_BRACKET",
        "R_BRACKET", "VAR", "WS",
    ];
    TruthTablesLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(TruthTablesLexer._LITERAL_NAMES, TruthTablesLexer._SYMBOLIC_NAMES, []);
    TruthTablesLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\r\xC7\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
        "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
        "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
        "#\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
        "\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x05\x05`\n\x05\x03\x05\x03\x05\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06m" +
        "\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07t\n\x07\x03\b\x03" +
        "\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x82" +
        "\n\b\x03\t\x03\t\x03\n\x03\n\x03\v\x06\v\x89\n\v\r\v\x0E\v\x8A\x03\f\x06" +
        "\f\x8E\n\f\r\f\x0E\f\x8F\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F" +
        "\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13" +
        "\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18" +
        "\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
        "\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03" +
        "\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x02\x02\x02\'\x03\x02" +
        "\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11" +
        "\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x02\x1B\x02\x02\x1D\x02\x02" +
        "\x1F\x02\x02!\x02\x02#\x02\x02%\x02\x02\'\x02\x02)\x02\x02+\x02\x02-\x02" +
        "\x02/\x02\x021\x02\x023\x02\x025\x02\x027\x02\x029\x02\x02;\x02\x02=\x02" +
        "\x02?\x02\x02A\x02\x02C\x02\x02E\x02\x02G\x02\x02I\x02\x02K\x02\x02\x03" +
        "\x02\x1E\x04\x02C\\c|\x05\x02\v\f\x0F\x0F\"\"\x04\x02CCcc\x04\x02DDdd" +
        "\x04\x02EEee\x04\x02FFff\x04\x02GGgg\x04\x02HHhh\x04\x02IIii\x04\x02J" +
        "Jjj\x04\x02KKkk\x04\x02LLll\x04\x02MMmm\x04\x02NNnn\x04\x02OOoo\x04\x02" +
        "PPpp\x04\x02QQqq\x04\x02RRrr\x04\x02SSss\x04\x02TTtt\x04\x02UUuu\x04\x02" +
        "VVvv\x04\x02WWww\x04\x02XXxx\x04\x02YYyy\x04\x02ZZzz\x04\x02[[{{\x04\x02" +
        "\\\\||\x02\xB3\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07" +
        "\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03" +
        "\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03" +
        "\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x03M\x03" +
        "\x02\x02\x02\x05Q\x03\x02\x02\x02\x07T\x03\x02\x02\x02\t_\x03\x02\x02" +
        "\x02\vl\x03\x02\x02\x02\rs\x03\x02\x02\x02\x0F\x81\x03\x02\x02\x02\x11" +
        "\x83\x03\x02\x02\x02\x13\x85\x03\x02\x02\x02\x15\x88\x03\x02\x02\x02\x17" +
        "\x8D\x03\x02\x02\x02\x19\x93\x03\x02\x02\x02\x1B\x95\x03\x02\x02\x02\x1D" +
        "\x97\x03\x02\x02\x02\x1F\x99\x03\x02\x02\x02!\x9B\x03\x02\x02\x02#\x9D" +
        "\x03\x02\x02\x02%\x9F\x03\x02\x02\x02\'\xA1\x03\x02\x02\x02)\xA3\x03\x02" +
        "\x02\x02+\xA5\x03\x02\x02\x02-\xA7\x03\x02\x02\x02/\xA9\x03\x02\x02\x02" +
        "1\xAB\x03\x02\x02\x023\xAD\x03\x02\x02\x025\xAF\x03\x02\x02\x027\xB1\x03" +
        "\x02\x02\x029\xB3\x03\x02\x02\x02;\xB5\x03\x02\x02\x02=\xB7\x03\x02\x02" +
        "\x02?\xB9\x03\x02\x02\x02A\xBB\x03\x02\x02\x02C\xBD\x03\x02\x02\x02E\xBF" +
        "\x03\x02\x02\x02G\xC1\x03\x02\x02\x02I\xC3\x03\x02\x02\x02K\xC5\x03\x02" +
        "\x02\x02MN\x05\x19\r\x02NO\x053\x1A\x02OP\x05\x1F\x10\x02P\x04\x03\x02" +
        "\x02\x02QR\x055\x1B\x02RS\x05;\x1E\x02S\x06\x03\x02\x02\x02TU\x05G$\x02" +
        "UV\x055\x1B\x02VW\x05;\x1E\x02W\b\x03\x02\x02\x02XY\x05)\x15\x02YZ\x05" +
        "1\x19\x02Z[\x057\x1C\x02[\\\x05/\x18\x02\\`\x03\x02\x02\x02]^\x07?\x02" +
        "\x02^`\x07@\x02\x02_X\x03\x02\x02\x02_]\x03\x02\x02\x02`a\x03\x02\x02" +
        "\x02ab\b\x05\x02\x02b\n\x03\x02\x02\x02cd\x05!\x11\x02de\x059\x1D\x02" +
        "ef\x05A!\x02fg\x05)\x15\x02gh\x05C\"\x02hm\x03\x02\x02\x02ij\x07>\x02" +
        "\x02jk\x07?\x02\x02km\x07@\x02\x02lc\x03\x02\x02\x02li\x03\x02\x02\x02" +
        "m\f\x03\x02\x02\x02no\x053\x1A\x02op\x05!\x11\x02pq\x05%\x13\x02qt\x03" +
        "\x02\x02\x02rt\x07\x80\x02\x02sn\x03\x02\x02\x02sr\x03\x02\x02\x02t\x0E" +
        "\x03\x02\x02\x02uv\x05? \x02vw\x05;\x1E\x02wx\x05A!\x02xy\x05!\x11\x02" +
        "y\x82\x03\x02\x02\x02z{\x05#\x12\x02{|\x05\x19\r\x02|}\x05/\x18\x02}~" +
        "\x05=\x1F\x02~\x7F\x05!\x11\x02\x7F\x82\x03\x02\x02\x02\x80\x82\x0423" +
        "\x02\x81u\x03\x02\x02\x02\x81z\x03\x02\x02\x02\x81\x80\x03\x02\x02\x02" +
        "\x82\x10\x03\x02\x02\x02\x83\x84\x07*\x02\x02\x84\x12\x03\x02\x02\x02" +
        "\x85\x86\x07+\x02\x02\x86\x14\x03\x02\x02\x02\x87\x89\t\x02\x02\x02\x88" +
        "\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8A" +
        "\x8B\x03\x02\x02\x02\x8B\x16\x03\x02\x02\x02\x8C\x8E\t\x03\x02\x02\x8D" +
        "\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F" +
        "\x90\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x92\b\f\x03\x02\x92\x18" +
        "\x03\x02\x02\x02\x93\x94\t\x04\x02\x02\x94\x1A\x03\x02\x02\x02\x95\x96" +
        "\t\x05\x02\x02\x96\x1C\x03\x02\x02\x02\x97\x98\t\x06\x02\x02\x98\x1E\x03" +
        "\x02\x02\x02\x99\x9A\t\x07\x02\x02\x9A \x03\x02\x02\x02\x9B\x9C\t\b\x02" +
        "\x02\x9C\"\x03\x02\x02\x02\x9D\x9E\t\t\x02\x02\x9E$\x03\x02\x02\x02\x9F" +
        "\xA0\t\n\x02\x02\xA0&\x03\x02\x02\x02\xA1\xA2\t\v\x02\x02\xA2(\x03\x02" +
        "\x02\x02\xA3\xA4\t\f\x02\x02\xA4*\x03\x02\x02\x02\xA5\xA6\t\r\x02\x02" +
        "\xA6,\x03\x02\x02\x02\xA7\xA8\t\x0E\x02\x02\xA8.\x03\x02\x02\x02\xA9\xAA" +
        "\t\x0F\x02\x02\xAA0\x03\x02\x02\x02\xAB\xAC\t\x10\x02\x02\xAC2\x03\x02" +
        "\x02\x02\xAD\xAE\t\x11\x02\x02\xAE4\x03\x02\x02\x02\xAF\xB0\t\x12\x02" +
        "\x02\xB06\x03\x02\x02\x02\xB1\xB2\t\x13\x02\x02\xB28\x03\x02\x02\x02\xB3" +
        "\xB4\t\x14\x02\x02\xB4:\x03\x02\x02\x02\xB5\xB6\t\x15\x02\x02\xB6<\x03" +
        "\x02\x02\x02\xB7\xB8\t\x16\x02\x02\xB8>\x03\x02\x02\x02\xB9\xBA\t\x17" +
        "\x02\x02\xBA@\x03\x02\x02\x02\xBB\xBC\t\x18\x02\x02\xBCB\x03\x02\x02\x02" +
        "\xBD\xBE\t\x19\x02\x02\xBED\x03\x02\x02\x02\xBF\xC0\t\x1A\x02\x02\xC0" +
        "F\x03\x02\x02\x02\xC1\xC2\t\x1B\x02\x02\xC2H\x03\x02\x02\x02\xC3\xC4\t" +
        "\x1C\x02\x02\xC4J\x03\x02\x02\x02\xC5\xC6\t\x1D\x02\x02\xC6L\x03\x02\x02" +
        "\x02\t\x02_ls\x81\x8A\x8F\x04\x03\x05\x02\b\x02\x02";
    return TruthTablesLexer;
}(Lexer_1.Lexer));
exports.TruthTablesLexer = TruthTablesLexer;
//# sourceMappingURL=TruthTablesLexer.js.map