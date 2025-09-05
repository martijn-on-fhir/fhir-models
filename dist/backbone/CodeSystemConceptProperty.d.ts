import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Coding } from '../elements/Coding';
export declare class CodeSystemConceptProperty extends BackboneElement {
    code?: string;
    _code?: Element;
    valueCode?: string;
    _valueCode?: Element;
    valueCoding?: Coding;
    valueString?: string;
    _valueString?: Element;
    valueInteger?: number;
    valueBoolean?: boolean;
    _valueBoolean?: Element;
    valueDateTime?: string;
    _valueDateTime?: Element;
    valueDecimal?: number;
    constructor(source?: Partial<CodeSystemConceptProperty>);
}
//# sourceMappingURL=CodeSystemConceptProperty.d.ts.map