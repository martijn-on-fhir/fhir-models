import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { MedicinalProductAuthorizationJurisdictionalAuthorization } from '../backbone/MedicinalProductAuthorizationJurisdictionalAuthorization';
import { MedicinalProductAuthorizationProcedure } from '../backbone/MedicinalProductAuthorizationProcedure';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class MedicinalProductAuthorization extends DomainResource {
    readonly resourceType: "MedicinalProductAuthorization";
    country?: CodeableConcept[];
    dataExclusivityPeriod?: Period;
    dateOfFirstAuthorization?: string;
    _dateOfFirstAuthorization?: Element;
    holder?: Reference;
    identifier?: Identifier[];
    internationalBirthDate?: string;
    _internationalBirthDate?: Element;
    jurisdiction?: CodeableConcept[];
    jurisdictionalAuthorization?: MedicinalProductAuthorizationJurisdictionalAuthorization[];
    legalBasis?: CodeableConcept;
    procedure?: MedicinalProductAuthorizationProcedure;
    regulator?: Reference;
    restoreDate?: string;
    _restoreDate?: Element;
    status?: CodeableConcept;
    statusDate?: string;
    _statusDate?: Element;
    subject?: Reference;
    validityPeriod?: Period;
    constructor(source?: Partial<MedicinalProductAuthorization>);
}
//# sourceMappingURL=MedicinalProductAuthorization.d.ts.map