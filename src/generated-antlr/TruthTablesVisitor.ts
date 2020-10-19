// @ts-nocheck
// Generated from ./TruthTables.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TruthTablesParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TruthTablesVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `Parenthesis`
	 * labeled alternative in `TruthTablesParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesis?: (ctx: ParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by the `Neg`
	 * labeled alternative in `TruthTablesParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNeg?: (ctx: NegContext) => Result;

	/**
	 * Visit a parse tree produced by the `Operation`
	 * labeled alternative in `TruthTablesParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperation?: (ctx: OperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `Value`
	 * labeled alternative in `TruthTablesParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `Var`
	 * labeled alternative in `TruthTablesParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;

	/**
	 * Visit a parse tree produced by `TruthTablesParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `TruthTablesParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TruthTablesParser.binaryOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryOp?: (ctx: BinaryOpContext) => Result;

	/**
	 * Visit a parse tree produced by `TruthTablesParser.unaryOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOp?: (ctx: UnaryOpContext) => Result;
}

