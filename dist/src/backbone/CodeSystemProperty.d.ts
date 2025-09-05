import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
export declare class CodeSystemProperty extends BackboneElement {
    code?: string;
    _code?: Element;
    description?: string;
    _description?: Element;
    type?: ('code' | 'Coding' | 'string' | 'integer' | 'boolean' | 'dateTime' | 'decimal');
    _type?: Element;
    uri?: string;
    _uri?: Element;
    constructor(source?: Partial<CodeSystemProperty>);
}
//# sourceMappingURL=CodeSystemProperty.d.ts.map