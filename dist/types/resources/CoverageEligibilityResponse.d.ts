import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { CoverageEligibilityResponseError } from '../backbone/CoverageEligibilityResponseError';
import { CoverageEligibilityResponseInsurance } from '../backbone/CoverageEligibilityResponseInsurance';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class CoverageEligibilityResponse extends DomainResource {
    readonly resourceType: "CoverageEligibilityResponse";
    created?: string;
    _created?: Element;
    disposition?: string;
    _disposition?: Element;
    error?: CoverageEligibilityResponseError[];
    form?: CodeableConcept;
    identifier?: Identifier[];
    insurance?: CoverageEligibilityResponseInsurance[];
    insurer?: Reference;
    outcome?: ('queued' | 'complete' | 'error' | 'partial');
    _outcome?: Element;
    patient?: Reference;
    preAuthRef?: string;
    _preAuthRef?: Element;
    purpose?: Array<'auth-requirements' | 'benefits' | 'discovery' | 'validation'>;
    _purpose?: Element[];
    request?: Reference;
    requestor?: Reference;
    servicedDate?: string;
    _servicedDate?: Element;
    servicedPeriod?: Period;
    status?: ('active' | 'cancelled' | 'draft' | 'entered-in-error');
    _status?: Element;
    constructor(source?: Partial<CoverageEligibilityResponse>);
}
//# sourceMappingURL=CoverageEligibilityResponse.d.ts.map