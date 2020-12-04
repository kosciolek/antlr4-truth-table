import { ATN } from "antlr4ts/atn/ATN";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { TruthTablesListener } from "./TruthTablesListener";
import { TruthTablesVisitor } from "./TruthTablesVisitor";
export declare class TruthTablesParser extends Parser {
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
    static readonly RULE_program = 0;
    static readonly RULE_expression = 1;
    static readonly RULE_binaryOp = 2;
    static readonly RULE_unaryOp = 3;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    constructor(input: TokenStream);
    program(): ProgramContext;
    expression(): ExpressionContext;
    expression(_p: number): ExpressionContext;
    binaryOp(): BinaryOpContext;
    unaryOp(): UnaryOpContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private expression_sempred;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class ProgramContext extends ParserRuleContext {
    EOF(): TerminalNode;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: TruthTablesListener): void;
    exitRule(listener: TruthTablesListener): void;
    accept<Result>(visitor: TruthTablesVisitor<Result>): Result;
}
export declare class ExpressionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExpressionContext): void;
}
export declare class ParenthesisContext extends ExpressionContext {
    L_BRACKET(): TerminalNode;
    expression(): ExpressionContext;
    R_BRACKET(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: TruthTablesListener): void;
    exitRule(listener: TruthTablesListener): void;
    accept<Result>(visitor: TruthTablesVisitor<Result>): Result;
}
export declare class UnaryOperationContext extends ExpressionContext {
    _op: UnaryOpContext;
    expression(): ExpressionContext;
    unaryOp(): UnaryOpContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: TruthTablesListener): void;
    exitRule(listener: TruthTablesListener): void;
    accept<Result>(visitor: TruthTablesVisitor<Result>): Result;
}
export declare class BinaryOperationContext extends ExpressionContext {
    _left: ExpressionContext;
    _op: BinaryOpContext;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    binaryOp(): BinaryOpContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: TruthTablesListener): void;
    exitRule(listener: TruthTablesListener): void;
    accept<Result>(visitor: TruthTablesVisitor<Result>): Result;
}
export declare class ValueContext extends ExpressionContext {
    VALUE(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: TruthTablesListener): void;
    exitRule(listener: TruthTablesListener): void;
    accept<Result>(visitor: TruthTablesVisitor<Result>): Result;
}
export declare class VarContext extends ExpressionContext {
    VAR(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: TruthTablesListener): void;
    exitRule(listener: TruthTablesListener): void;
    accept<Result>(visitor: TruthTablesVisitor<Result>): Result;
}
export declare class BinaryOpContext extends ParserRuleContext {
    AND(): TerminalNode | undefined;
    OR(): TerminalNode | undefined;
    XOR(): TerminalNode | undefined;
    IMPL(): TerminalNode | undefined;
    EQUIV(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: TruthTablesListener): void;
    exitRule(listener: TruthTablesListener): void;
    accept<Result>(visitor: TruthTablesVisitor<Result>): Result;
}
export declare class UnaryOpContext extends ParserRuleContext {
    NEG(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: TruthTablesListener): void;
    exitRule(listener: TruthTablesListener): void;
    accept<Result>(visitor: TruthTablesVisitor<Result>): Result;
}
//# sourceMappingURL=TruthTablesParser.d.ts.map