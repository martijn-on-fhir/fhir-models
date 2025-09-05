import 'reflect-metadata';
import { Element } from '../base/Element';
import { Identifier } from './Identifier';
export declare class Reference extends Element {
    display?: string;
    _display?: Element;
    identifier?: Identifier;
    reference?: string;
    _reference?: Element;
    type?: string;
    _type?: Element;
    constructor(source?: Partial<Reference>);
}
//# sourceMappingURL=Reference.d.ts.map