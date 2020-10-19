// @ts-nocheck
// Generated from ./TruthTables.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { TruthTablesListener } from "./TruthTablesListener";
import { TruthTablesVisitor } from "./TruthTablesVisitor";


export class TruthTablesParser extends Parser {
	public static readonly AND = 1;
	public static readonly OR = 2;
	public static readonly XOR = 3;
	public static readonly IMPL = 4;
	public static readonly EQUIV = 5;
	public static readonly NEG = 6;
	public static readonly VALUE = 7;
	public static readonly L_BRACKET = 8;
	public static readonly R_BRACKET = 9;
	public static readonly VAR = 10;
	public static readonly WS = 11;
	public static readonly RULE_program = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_binaryOp = 2;
	public static readonly RULE_unaryOp = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "expression", "binaryOp", "unaryOp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "AND", "OR", "XOR", "IMPL", "EQUIV", "NEG", "VALUE", "L_BRACKET", 
		"R_BRACKET", "VAR", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TruthTablesParser._LITERAL_NAMES, TruthTablesParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TruthTablesParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "TruthTables.g4"; }

	// @Override
	public get ruleNames(): string[] { return TruthTablesParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TruthTablesParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TruthTablesParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TruthTablesParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 8;
			this.expression(0);
			this.state = 9;
			this.match(TruthTablesParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, TruthTablesParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 21;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TruthTablesParser.L_BRACKET:
				{
				_localctx = new ParenthesisContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 12;
				this.match(TruthTablesParser.L_BRACKET);
				this.state = 13;
				this.expression(0);
				this.state = 14;
				this.match(TruthTablesParser.R_BRACKET);
				}
				break;
			case TruthTablesParser.NEG:
				{
				_localctx = new NegContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 16;
				(_localctx as NegContext)._op = this.unaryOp();
				this.state = 17;
				this.expression(4);
				}
				break;
			case TruthTablesParser.VALUE:
				{
				_localctx = new ValueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 19;
				this.match(TruthTablesParser.VALUE);
				}
				break;
			case TruthTablesParser.VAR:
				{
				_localctx = new VarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 20;
				this.match(TruthTablesParser.VAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 29;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new OperationContext(new ExpressionContext(_parentctx, _parentState));
					(_localctx as OperationContext)._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, TruthTablesParser.RULE_expression);
					this.state = 23;
					if (!(this.precpred(this._ctx, 3))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
					}
					this.state = 24;
					(_localctx as OperationContext)._op = this.binaryOp();
					this.state = 25;
					(_localctx as OperationContext)._right = this.expression(4);
					}
					}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binaryOp(): BinaryOpContext {
		let _localctx: BinaryOpContext = new BinaryOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TruthTablesParser.RULE_binaryOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TruthTablesParser.AND) | (1 << TruthTablesParser.OR) | (1 << TruthTablesParser.XOR) | (1 << TruthTablesParser.IMPL) | (1 << TruthTablesParser.EQUIV))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryOp(): UnaryOpContext {
		let _localctx: UnaryOpContext = new UnaryOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TruthTablesParser.RULE_unaryOp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this.match(TruthTablesParser.NEG);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r\'\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03\x18\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x1E" +
		"\n\x03\f\x03\x0E\x03!\v\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x02" +
		"\x02\x03\x04\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x03\x03\x02\x03\x07" +
		"\x02&\x02\n\x03\x02\x02\x02\x04\x17\x03\x02\x02\x02\x06\"\x03\x02\x02" +
		"\x02\b$\x03\x02\x02\x02\n\v\x05\x04\x03\x02\v\f\x07\x02\x02\x03\f\x03" +
		"\x03\x02\x02\x02\r\x0E\b\x03\x01\x02\x0E\x0F\x07\n\x02\x02\x0F\x10\x05" +
		"\x04\x03\x02\x10\x11\x07\v\x02\x02\x11\x18\x03\x02\x02\x02\x12\x13\x05" +
		"\b\x05\x02\x13\x14\x05\x04\x03\x06\x14\x18\x03\x02\x02\x02\x15\x18\x07" +
		"\t\x02\x02\x16\x18\x07\f\x02\x02\x17\r\x03\x02\x02\x02\x17\x12\x03\x02" +
		"\x02\x02\x17\x15\x03\x02\x02\x02\x17\x16\x03\x02\x02\x02\x18\x1F\x03\x02" +
		"\x02\x02\x19\x1A\f\x05\x02\x02\x1A\x1B\x05\x06\x04\x02\x1B\x1C\x05\x04" +
		"\x03\x06\x1C\x1E\x03\x02\x02\x02\x1D\x19\x03\x02\x02\x02\x1E!\x03\x02" +
		"\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \x05\x03\x02\x02" +
		"\x02!\x1F\x03\x02\x02\x02\"#\t\x02\x02\x02#\x07\x03\x02\x02\x02$%\x07" +
		"\b\x02\x02%\t\x03\x02\x02\x02\x04\x17\x1F";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TruthTablesParser.__ATN) {
			TruthTablesParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TruthTablesParser._serializedATN));
		}

		return TruthTablesParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public EOF(): TerminalNode { return this.getToken(TruthTablesParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TruthTablesParser.RULE_program; }
	// @Override
	public enterRule(listener: TruthTablesListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: TruthTablesListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TruthTablesVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TruthTablesParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ParenthesisContext extends ExpressionContext {
	public L_BRACKET(): TerminalNode { return this.getToken(TruthTablesParser.L_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public R_BRACKET(): TerminalNode { return this.getToken(TruthTablesParser.R_BRACKET, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TruthTablesListener): void {
		if (listener.enterParenthesis) {
			listener.enterParenthesis(this);
		}
	}
	// @Override
	public exitRule(listener: TruthTablesListener): void {
		if (listener.exitParenthesis) {
			listener.exitParenthesis(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TruthTablesVisitor<Result>): Result {
		if (visitor.visitParenthesis) {
			return visitor.visitParenthesis(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NegContext extends ExpressionContext {
	public _op: UnaryOpContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public unaryOp(): UnaryOpContext {
		return this.getRuleContext(0, UnaryOpContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TruthTablesListener): void {
		if (listener.enterNeg) {
			listener.enterNeg(this);
		}
	}
	// @Override
	public exitRule(listener: TruthTablesListener): void {
		if (listener.exitNeg) {
			listener.exitNeg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TruthTablesVisitor<Result>): Result {
		if (visitor.visitNeg) {
			return visitor.visitNeg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperationContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _op: BinaryOpContext;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public binaryOp(): BinaryOpContext {
		return this.getRuleContext(0, BinaryOpContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TruthTablesListener): void {
		if (listener.enterOperation) {
			listener.enterOperation(this);
		}
	}
	// @Override
	public exitRule(listener: TruthTablesListener): void {
		if (listener.exitOperation) {
			listener.exitOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TruthTablesVisitor<Result>): Result {
		if (visitor.visitOperation) {
			return visitor.visitOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueContext extends ExpressionContext {
	public VALUE(): TerminalNode { return this.getToken(TruthTablesParser.VALUE, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TruthTablesListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: TruthTablesListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TruthTablesVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VarContext extends ExpressionContext {
	public VAR(): TerminalNode { return this.getToken(TruthTablesParser.VAR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TruthTablesListener): void {
		if (listener.enterVar) {
			listener.enterVar(this);
		}
	}
	// @Override
	public exitRule(listener: TruthTablesListener): void {
		if (listener.exitVar) {
			listener.exitVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TruthTablesVisitor<Result>): Result {
		if (visitor.visitVar) {
			return visitor.visitVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryOpContext extends ParserRuleContext {
	public AND(): TerminalNode | undefined { return this.tryGetToken(TruthTablesParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(TruthTablesParser.OR, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(TruthTablesParser.XOR, 0); }
	public IMPL(): TerminalNode | undefined { return this.tryGetToken(TruthTablesParser.IMPL, 0); }
	public EQUIV(): TerminalNode | undefined { return this.tryGetToken(TruthTablesParser.EQUIV, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TruthTablesParser.RULE_binaryOp; }
	// @Override
	public enterRule(listener: TruthTablesListener): void {
		if (listener.enterBinaryOp) {
			listener.enterBinaryOp(this);
		}
	}
	// @Override
	public exitRule(listener: TruthTablesListener): void {
		if (listener.exitBinaryOp) {
			listener.exitBinaryOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TruthTablesVisitor<Result>): Result {
		if (visitor.visitBinaryOp) {
			return visitor.visitBinaryOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOpContext extends ParserRuleContext {
	public NEG(): TerminalNode { return this.getToken(TruthTablesParser.NEG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TruthTablesParser.RULE_unaryOp; }
	// @Override
	public enterRule(listener: TruthTablesListener): void {
		if (listener.enterUnaryOp) {
			listener.enterUnaryOp(this);
		}
	}
	// @Override
	public exitRule(listener: TruthTablesListener): void {
		if (listener.exitUnaryOp) {
			listener.exitUnaryOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TruthTablesVisitor<Result>): Result {
		if (visitor.visitUnaryOp) {
			return visitor.visitUnaryOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


