import * as ts from 'typescript';
const printer: ts.Printer = ts.createPrinter();
const sourceFile: ts.SourceFile = ts.createSourceFile(
  'test.ts', 'const x  :  number = 42', ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS
);
console.log(printer.printFile(sourceFile));
