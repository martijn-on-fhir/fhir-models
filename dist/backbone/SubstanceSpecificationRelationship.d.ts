import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
import { Ratio } from '../elements/Ratio';
import { Reference } from '../elements/Reference';
export declare class SubstanceSpecificationRelationship extends BackboneElement {
    amountQuantity?: Quantity;
    amountRange?: Range;
    amountRatio?: Ratio;
    amountString?: string;
    _amountString?: Element;
    amountRatioLowLimit?: Ratio;
    amountType?: CodeableConcept;
    isDefining?: boolean;
    _isDefining?: Element;
    relationship?: CodeableConcept;
    source?: Reference[];
    substanceReference?: Reference;
    substanceCodeableConcept?: CodeableConcept;
    constructor(source?: Partial<SubstanceSpecificationRelationship>);
}
//# sourceMappingURL=SubstanceSpecificationRelationship.d.ts.map