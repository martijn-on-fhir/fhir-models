import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactPoint } from '../elements/ContactPoint';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { PractitionerRoleAvailableTime } from '../backbone/PractitionerRoleAvailableTime';
import { PractitionerRoleNotAvailable } from '../backbone/PractitionerRoleNotAvailable';
import { Reference } from '../elements/Reference';
export declare class PractitionerRole extends DomainResource {
    readonly resourceType: "PractitionerRole";
    active?: boolean;
    _active?: Element;
    availabilityExceptions?: string;
    _availabilityExceptions?: Element;
    availableTime?: PractitionerRoleAvailableTime[];
    code?: CodeableConcept[];
    endpoint?: Reference[];
    healthcareService?: Reference[];
    identifier?: Identifier[];
    location?: Reference[];
    notAvailable?: PractitionerRoleNotAvailable[];
    organization?: Reference;
    period?: Period;
    practitioner?: Reference;
    specialty?: CodeableConcept[];
    telecom?: ContactPoint[];
    constructor(source?: Partial<PractitionerRole>);
}
//# sourceMappingURL=PractitionerRole.d.ts.map