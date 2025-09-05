import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Quantity } from '../elements/Quantity';
export declare class SubstanceSpecificationMoiety extends BackboneElement {
    amountQuantity?: Quantity;
    amountString?: string;
    _amountString?: Element;
    identifier?: Identifier;
    molecularFormula?: string;
    _molecularFormula?: Element;
    name?: string;
    _name?: Element;
    opticalActivity?: CodeableConcept;
    role?: CodeableConcept;
    stereochemistry?: CodeableConcept;
    constructor(source?: Partial<SubstanceSpecificationMoiety>);
}
//# sourceMappingURL=SubstanceSpecificationMoiety.d.ts.map