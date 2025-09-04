import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
export declare class MedicinalProductAuthorizationJurisdictionalAuthorization extends BackboneElement {
    country?: CodeableConcept;
    identifier?: Identifier[];
    jurisdiction?: CodeableConcept[];
    legalStatusOfSupply?: CodeableConcept;
    validityPeriod?: Period;
    constructor(source?: Partial<MedicinalProductAuthorizationJurisdictionalAuthorization>);
}
//# sourceMappingURL=MedicinalProductAuthorizationJurisdictionalAuthorization.d.ts.map