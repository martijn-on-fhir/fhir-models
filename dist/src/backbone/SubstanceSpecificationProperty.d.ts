import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class SubstanceSpecificationProperty extends BackboneElement {
    amountQuantity?: Quantity;
    amountString?: string;
    _amountString?: Element;
    category?: CodeableConcept;
    code?: CodeableConcept;
    definingSubstanceReference?: Reference;
    definingSubstanceCodeableConcept?: CodeableConcept;
    parameters?: string;
    _parameters?: Element;
    constructor(source?: Partial<SubstanceSpecificationProperty>);
}
//# sourceMappingURL=SubstanceSpecificationProperty.d.ts.map