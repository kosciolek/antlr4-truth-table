import { ATN } from "antlr4ts/atn/ATN";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
export declare class TruthTablesLexer extends Lexer {
    static readonly AND = 1;
    static readonly OR = 2;
    static readonly XOR = 3;
    static readonly IMPL = 4;
    static readonly EQUIV = 5;
    static readonly NEG = 6;
    static readonly VALUE = 7;
    static readonly L_BRACKET = 8;
    static readonly R_BRACKET = 9;
    static readonly VAR = 10;
    static readonly WS = 11;
    static readonly channelNames: string[];
    static readonly modeNames: string[];
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    constructor(input: CharStream);
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    get channelNames(): string[];
    get modeNames(): string[];
    action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void;
    private IMPL_action;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
//# sourceMappingURL=TruthTablesLexer.d.ts.map