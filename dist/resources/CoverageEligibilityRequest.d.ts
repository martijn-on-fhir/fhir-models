import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { CoverageEligibilityRequestInsurance } from '../backbone/CoverageEligibilityRequestInsurance';
import { CoverageEligibilityRequestItem } from '../backbone/CoverageEligibilityRequestItem';
import { CoverageEligibilityRequestSupportingInfo } from '../backbone/CoverageEligibilityRequestSupportingInfo';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class CoverageEligibilityRequest extends DomainResource {
    readonly resourceType: "CoverageEligibilityRequest";
    created?: string;
    _created?: Element;
    enterer?: Reference;
    facility?: Reference;
    identifier?: Identifier[];
    insurance?: CoverageEligibilityRequestInsurance[];
    insurer?: Reference;
    item?: CoverageEligibilityRequestItem[];
    patient?: Reference;
    priority?: CodeableConcept;
    provider?: Reference;
    purpose?: Array<'auth-requirements' | 'benefits' | 'discovery' | 'validation'>;
    _purpose?: Element[];
    servicedDate?: string;
    _servicedDate?: Element;
    servicedPeriod?: Period;
    status?: ('active' | 'cancelled' | 'draft' | 'entered-in-error');
    _status?: Element;
    supportingInfo?: CoverageEligibilityRequestSupportingInfo[];
    constructor(source?: Partial<CoverageEligibilityRequest>);
}
//# sourceMappingURL=CoverageEligibilityRequest.d.ts.map