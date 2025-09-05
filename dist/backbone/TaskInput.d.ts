import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
export declare class TaskInput extends BackboneElement {
    type?: CodeableConcept;
    valueBase64Binary?: string;
    _valueBase64Binary?: Element;
    valueBoolean?: boolean;
    _valueBoolean?: Element;
    valueCanonical?: string;
    _valueCanonical?: Element;
    valueCode?: string;
    _valueCode?: Element;
    valueDate?: string;
    _valueDate?: Element;
    valueDateTime?: string;
    _valueDateTime?: Element;
    valueDecimal?: number;
    valueId?: string;
    _valueId?: Element;
    valueInstant?: string;
    _valueInstant?: Element;
    valueInteger?: number;
    valueMarkdown?: string;
    _valueMarkdown?: Element;
    valueOid?: string;
    _valueOid?: Element;
    valuePositiveInt?: number;
    valueString?: string;
    _valueString?: Element;
    valueTime?: string;
    _valueTime?: Element;
    valueUnsignedInt?: number;
    valueUri?: string;
    constructor(source?: Partial<TaskInput>);
}
//# sourceMappingURL=TaskInput.d.ts.map