import * as ts from 'typescript';
import { printNode } from '../util';

const lit = ts.createAdd(ts.createLiteral(42), ts.createLiteral("foo"));

printNode(lit);
