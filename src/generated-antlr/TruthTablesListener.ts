// @ts-nocheck
// Generated from ./TruthTables.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ParenthesisContext } from "./TruthTablesParser";
import { NegContext } from "./TruthTablesParser";
import { OperationContext } from "./TruthTablesParser";
import { ValueContext } from "./TruthTablesParser";
import { VarContext } from "./TruthTablesParser";
import { ProgramContext } from "./TruthTablesParser";
import { ExpressionContext } from "./TruthTablesParser";
import { BinaryOpContext } from "./TruthTablesParser";
import { UnaryOpContext } from "./TruthTablesParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TruthTablesParser`.
 */
export interface TruthTablesListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `Parenthesis`
	 * labeled alternative in `TruthTablesParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParenthesis?: (ctx: ParenthesisContext) => void;
	/**
	 * Exit a parse tree produced by the `Parenthesis`
	 * labeled alternative in `TruthTablesParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParenthesis?: (ctx: ParenthesisContext) => void;

	/**
	 * Enter a parse tree produced by the `Neg`
	 * labeled alternative in `TruthTablesParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNeg?: (ctx: NegContext) => void;
	/**
	 * Exit a parse tree produced by the `Neg`
	 * labeled alternative in `TruthTablesParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNeg?: (ctx: NegContext) => void;

	/**
	 * Enter a parse tree produced by the `Operation`
	 * labeled alternative in `TruthTablesParser.expression`.
	 * @param ctx the parse tree
	 */
	enterOperation?: (ctx: OperationContext) => void;
	/**
	 * Exit a parse tree produced by the `Operation`
	 * labeled alternative in `TruthTablesParser.expression`.
	 * @param ctx the parse tree
	 */
	exitOperation?: (ctx: OperationContext) => void;

	/**
	 * Enter a parse tree produced by the `Value`
	 * labeled alternative in `TruthTablesParser.expression`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by the `Value`
	 * labeled alternative in `TruthTablesParser.expression`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by the `Var`
	 * labeled alternative in `TruthTablesParser.expression`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by the `Var`
	 * labeled alternative in `TruthTablesParser.expression`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;

	/**
	 * Enter a parse tree produced by `TruthTablesParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `TruthTablesParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `TruthTablesParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TruthTablesParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TruthTablesParser.binaryOp`.
	 * @param ctx the parse tree
	 */
	enterBinaryOp?: (ctx: BinaryOpContext) => void;
	/**
	 * Exit a parse tree produced by `TruthTablesParser.binaryOp`.
	 * @param ctx the parse tree
	 */
	exitBinaryOp?: (ctx: BinaryOpContext) => void;

	/**
	 * Enter a parse tree produced by `TruthTablesParser.unaryOp`.
	 * @param ctx the parse tree
	 */
	enterUnaryOp?: (ctx: UnaryOpContext) => void;
	/**
	 * Exit a parse tree produced by `TruthTablesParser.unaryOp`.
	 * @param ctx the parse tree
	 */
	exitUnaryOp?: (ctx: UnaryOpContext) => void;
}

