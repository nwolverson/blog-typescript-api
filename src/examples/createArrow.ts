import * as ts from 'typescript';
import { printNode } from '../util';

const lit = ts.createArrowFunction([], [], [
    ts.createParameter([], [], null, 'x', null, ts.createTypeReferenceNode('number', []))
], null, null, ts.createLiteral(42));
printNode(lit);
