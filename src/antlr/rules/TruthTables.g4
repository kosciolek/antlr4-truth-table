grammar TruthTables;


/* Parser rules */
program : expression EOF;

expression : L_BRACKET expression R_BRACKET #Parenthesis
           | op=unaryOp expression #Neg
           | left=expression op=binaryOp right=expression #Operation
           | VALUE #Value
           | VAR #Var
           ;

binaryOp: AND | OR | XOR | IMPL | EQUIV #BinaryOp;
unaryOp: NEG;

/* Lexer rules */
AND : A N D ;
OR : O R;
XOR : X O R;
IMPL : ((I M P L)|'=>');
EQUIV : ((E Q U I V)|'<=>');
NEG : ((N E G)|'~');
VALUE : (T R U E | F A L S E | '1' | '0');
L_BRACKET : '(';
R_BRACKET : ')';
VAR : [a-zA-Z]+;
WS : [ \r\n\t]+ -> skip ;


fragment A:('a'|'A');
fragment B:('b'|'B');
fragment C:('c'|'C');
fragment D:('d'|'D');
fragment E:('e'|'E');
fragment F:('f'|'F');
fragment G:('g'|'G');
fragment H:('h'|'H');
fragment I:('i'|'I');
fragment J:('j'|'J');
fragment K:('k'|'K');
fragment L:('l'|'L');
fragment M:('m'|'M');
fragment N:('n'|'N');
fragment O:('o'|'O');
fragment P:('p'|'P');
fragment Q:('q'|'Q');
fragment R:('r'|'R');
fragment S:('s'|'S');
fragment T:('t'|'T');
fragment U:('u'|'U');
fragment V:('v'|'V');
fragment W:('w'|'W');
fragment X:('x'|'X');
fragment Y:('y'|'Y');
fragment Z:('z'|'Z');