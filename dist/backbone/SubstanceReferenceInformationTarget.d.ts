import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
import { Reference } from '../elements/Reference';
export declare class SubstanceReferenceInformationTarget extends BackboneElement {
    amountQuantity?: Quantity;
    amountRange?: Range;
    amountString?: string;
    _amountString?: Element;
    amountType?: CodeableConcept;
    interaction?: CodeableConcept;
    organism?: CodeableConcept;
    organismType?: CodeableConcept;
    source?: Reference[];
    target?: Identifier;
    type?: CodeableConcept;
    constructor(source?: Partial<SubstanceReferenceInformationTarget>);
}
//# sourceMappingURL=SubstanceReferenceInformationTarget.d.ts.map