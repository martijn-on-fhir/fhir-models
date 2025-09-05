import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { InsurancePlanContact } from '../backbone/InsurancePlanContact';
import { InsurancePlanCoverage } from '../backbone/InsurancePlanCoverage';
import { InsurancePlanPlan } from '../backbone/InsurancePlanPlan';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class InsurancePlan extends DomainResource {
    readonly resourceType: "InsurancePlan";
    administeredBy?: Reference;
    alias?: string[];
    _alias?: Element[];
    contact?: InsurancePlanContact[];
    coverage?: InsurancePlanCoverage[];
    coverageArea?: Reference[];
    endpoint?: Reference[];
    identifier?: Identifier[];
    name?: string;
    _name?: Element;
    network?: Reference[];
    ownedBy?: Reference;
    period?: Period;
    plan?: InsurancePlanPlan[];
    status?: ('draft' | 'active' | 'retired' | 'unknown');
    _status?: Element;
    type?: CodeableConcept[];
    constructor(source?: Partial<InsurancePlan>);
}
//# sourceMappingURL=InsurancePlan.d.ts.map