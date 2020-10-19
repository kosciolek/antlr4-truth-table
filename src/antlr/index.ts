import { AbstractParseTreeVisitor, ParseTreeWalker } from "antlr4ts/tree";
import { TruthTablesVisitor } from "../generated-antlr/TruthTablesVisitor";
import {
  OperationContext,
  ParenthesisContext,
  ProgramContext,
  TruthTablesParser,
  ValueContext,
  VarContext,
} from "../generated-antlr/TruthTablesParser";
import { TruthTablesListener } from "../generated-antlr/TruthTablesListener";
import { CharStreams, CommonTokenStream, ParserRuleContext } from "antlr4ts";
import { TruthTablesLexer } from "../generated-antlr/TruthTablesLexer";
import { Interval } from "antlr4ts/misc";

export type TruthTableInput = { [variableName: string]: boolean };

const getFullContextText = (ctx: ParserRuleContext) =>
  ctx.start.inputStream?.getText(
    Interval.of(ctx.start.startIndex, ctx.stop!.stopIndex)
  );

class StepsVisitor
  extends AbstractParseTreeVisitor<any>
  implements TruthTablesVisitor<any> {
  constructor(public input: TruthTableInput) {
    super();
  }
  protected defaultResult(): number {
    return 0;
  }

  operations: { text: string; value: boolean }[] = [];

  visitProgram(ctx: ProgramContext) {
    return ctx.expression().accept(this);
  }

  visitParenthesis(ctx: ParenthesisContext) {
    return this.visit(ctx.expression());
  }

  visitOperation(ctx: OperationContext) {
    let value, text;

    const lVal = ctx._left.accept(this);
    const rVal = ctx._right.accept(this);
    if (ctx.binaryOp().OR()) value = lVal || rVal;
    else if (ctx.binaryOp().AND()) value = lVal && rVal;
    else if (ctx.binaryOp().EQUIV()) value = lVal === rVal;
    else if (ctx.binaryOp().XOR()) value = lVal !== rVal;
    else if (ctx.binaryOp().IMPL()) {
      value = !lVal || (lVal && rVal);
    }

    text = getFullContextText(ctx);

    this.operations.push({
      text,
      value,
    });
    return value;
  }

  visitVar(ctx: VarContext) {
    return this.input[ctx.text];
  }

  visitValue(ctx: ValueContext) {
    if (ctx.text === "0") return false;
    else if (ctx.text === "1") return true;
    else if (ctx.text.match(/false/i)) return false;
    return true;
  }
}

function generateInput(
  variableNames: string[] = [],
  inputs: TruthTableInput[] = []
): TruthTableInput[] {
  if (!variableNames.length) return inputs;
  const currName = variableNames.pop()!;

  if (!inputs.length) {
    inputs.push({ [currName]: true });
    inputs.push({ [currName]: false });
  } else {
    inputs.push(
      ...inputs.reduce((acc, curr) => {
        acc.push({ ...curr });
        return acc;
      }, [] as TruthTableInput[])
    );

    for (let i = 0; i < inputs.length; i++) {
      inputs[i][currName] = i < inputs.length / 2;
    }
  }

  return generateInput(variableNames, inputs);
}

export const generateTruthTable = (formula: string) => {
  const stream = CharStreams.fromString(formula);
  const lexer = new TruthTablesLexer(stream);
  const commonTokenStream = new CommonTokenStream(lexer);

  const parser = new TruthTablesParser(commonTokenStream);
  const tree = parser.program();

  const variableNames: string[] = [];
  ParseTreeWalker.DEFAULT.walk(
    {
      enterVar(ctx: VarContext) {
        const varId = ctx.text;
        if (variableNames.indexOf(varId) === -1) variableNames.push(varId);
      },
    } as TruthTablesListener,
    tree
  );

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

  return generateInput(variableNames).map((input) => {
    const visitor = new StepsVisitor(input);
    visitor.visit(tree);
    return { input, steps: visitor.operations };
  });
};
