import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { CoverageClass } from '../backbone/CoverageClass';
import { CoverageCostToBeneficiary } from '../backbone/CoverageCostToBeneficiary';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class Coverage extends DomainResource {
    readonly resourceType: "Coverage";
    beneficiary?: Reference;
    class?: CoverageClass[];
    contract?: Reference[];
    costToBeneficiary?: CoverageCostToBeneficiary[];
    dependent?: string;
    _dependent?: Element;
    identifier?: Identifier[];
    network?: string;
    _network?: Element;
    order?: number;
    payor?: Reference[];
    period?: Period;
    policyHolder?: Reference;
    relationship?: CodeableConcept;
    status?: ('active' | 'cancelled' | 'draft' | 'entered-in-error');
    _status?: Element;
    subrogation?: boolean;
    _subrogation?: Element;
    subscriber?: Reference;
    subscriberId?: string;
    _subscriberId?: Element;
    type?: CodeableConcept;
    constructor(source?: Partial<Coverage>);
}
//# sourceMappingURL=Coverage.d.ts.map