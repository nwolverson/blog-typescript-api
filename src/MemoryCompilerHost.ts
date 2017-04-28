import * as ts from 'typescript';

export default class MemoryCompilerHost implements ts.CompilerHost {
  files: { [fileName: string]: string } = {}

  getSourceFile(filename: string, languageVersion: ts.ScriptTarget, onError?: (message: string) => void): ts.SourceFile {
    var text = this.files[filename];
    if (!text) return null;
    return ts.createSourceFile(filename, text, languageVersion);
  }
  getDefaultLibFileName = (options: ts.CompilerOptions) => 'lib.d.ts';
  getDirectories = (path: string): string[] => [];

  writeFile = (filename: string, data: string, writeByteOrderMark: boolean, onError?: (message: string) => void) => {}
  getCurrentDirectory = () => "";
  getCanonicalFileName = (fileName: string) => fileName;
  useCaseSensitiveFileNames = () => true;
  getNewLine = () => "\n";
  fileExists = (fileName: string) => !!this.files[fileName];
  readFile = (fileName: string) => this.files[fileName];

  addFile(fileName: string, body: string) {
    this.files[fileName] = body;
  }
}