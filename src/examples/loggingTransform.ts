import * as ts from 'typescript';

const printer: ts.Printer = ts.createPrinter();

const source: string = `let x = n + 42;`;

const loggingTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
    function visit(node: ts.Node): ts.Node {
        console.log("Visiting " + ts.SyntaxKind[node.kind]);
        return ts.visitEachChild(node, visit, context);
    }
    return ts.visitNode(rootNode, visit);
};


const sourceFile: ts.SourceFile = ts.createSourceFile(
  'test.ts', source, ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS
);

console.log(printer.printFile(sourceFile));


// Options may be passed to transform
const result: ts.TransformationResult<ts.SourceFile> = ts.transform<ts.SourceFile>(
  sourceFile, [ loggingTransformer ]
);

const transformedSourceFile: ts.SourceFile = result.transformed[0];


console.log(printer.printFile(transformedSourceFile));