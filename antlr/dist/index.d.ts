export declare type TruthTableInput = {
    [variableName: string]: boolean;
};
export declare const generateTruthTable: (formula: string) => {
    input: TruthTableInput;
    steps: {
        text: string;
        value: boolean;
    }[];
}[];
//# sourceMappingURL=index.d.ts.map