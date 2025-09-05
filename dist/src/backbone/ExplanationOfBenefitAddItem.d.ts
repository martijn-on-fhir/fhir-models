import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Address } from '../elements/Address';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ExplanationOfBenefitAddItemDetail } from './ExplanationOfBenefitAddItemDetail';
import { ExplanationOfBenefitItemAdjudication } from './ExplanationOfBenefitItemAdjudication';
import { Money } from '../elements/Money';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class ExplanationOfBenefitAddItem extends BackboneElement {
    adjudication?: ExplanationOfBenefitItemAdjudication[];
    bodySite?: CodeableConcept;
    detail?: ExplanationOfBenefitAddItemDetail[];
    detailSequence?: number[];
    factor?: number;
    itemSequence?: number[];
    locationCodeableConcept?: CodeableConcept;
    locationAddress?: Address;
    locationReference?: Reference;
    modifier?: CodeableConcept[];
    net?: Money;
    noteNumber?: number[];
    productOrService?: CodeableConcept;
    programCode?: CodeableConcept[];
    provider?: Reference[];
    quantity?: Quantity;
    servicedDate?: string;
    _servicedDate?: Element;
    servicedPeriod?: Period;
    subDetailSequence?: number[];
    subSite?: CodeableConcept[];
    unitPrice?: Money;
    constructor(source?: Partial<ExplanationOfBenefitAddItem>);
}
//# sourceMappingURL=ExplanationOfBenefitAddItem.d.ts.map