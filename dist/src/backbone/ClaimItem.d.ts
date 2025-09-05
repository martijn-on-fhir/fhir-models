import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Address } from '../elements/Address';
import { ClaimItemDetail } from './ClaimItemDetail';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class ClaimItem extends BackboneElement {
    bodySite?: CodeableConcept;
    careTeamSequence?: number[];
    category?: CodeableConcept;
    detail?: ClaimItemDetail[];
    diagnosisSequence?: number[];
    encounter?: Reference[];
    factor?: number;
    informationSequence?: number[];
    locationCodeableConcept?: CodeableConcept;
    locationAddress?: Address;
    locationReference?: Reference;
    modifier?: CodeableConcept[];
    net?: Money;
    procedureSequence?: number[];
    productOrService?: CodeableConcept;
    programCode?: CodeableConcept[];
    quantity?: Quantity;
    revenue?: CodeableConcept;
    sequence?: number;
    servicedDate?: string;
    _servicedDate?: Element;
    servicedPeriod?: Period;
    subSite?: CodeableConcept[];
    udi?: Reference[];
    unitPrice?: Money;
    constructor(source?: Partial<ClaimItem>);
}
//# sourceMappingURL=ClaimItem.d.ts.map