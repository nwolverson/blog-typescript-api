import * as ts from 'typescript';

export const printNode = (node: ts.Node) => {
    const sourceFile: ts.SourceFile = ts.createSourceFile('test.ts', '', ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS);
    console.log(ts.createPrinter().printNode(ts.EmitHint.Expression, node, sourceFile) );
};

export const findNode = (n: ts.Node, f: (testNode: ts.Node) => Boolean) => {
  let result : ts.Node;
  function findNode(nn: ts.Node) {
    if (result) {
      return;
    }
    if (f(nn)) {
      result = nn;
      return;
    }
    ts.forEachChild(nn, findNode);
  }
  findNode(n);
  return result;
}