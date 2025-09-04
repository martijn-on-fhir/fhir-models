import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CareTeamParticipant } from '../backbone/CareTeamParticipant';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactPoint } from '../elements/ContactPoint';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class CareTeam extends DomainResource {
    readonly resourceType: "CareTeam";
    category?: CodeableConcept[];
    encounter?: Reference;
    identifier?: Identifier[];
    managingOrganization?: Reference[];
    name?: string;
    _name?: Element;
    note?: Annotation[];
    participant?: CareTeamParticipant[];
    period?: Period;
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[];
    status?: ('proposed' | 'active' | 'suspended' | 'inactive' | 'entered-in-error');
    _status?: Element;
    subject?: Reference;
    telecom?: ContactPoint[];
    constructor(source?: Partial<CareTeam>);
}
//# sourceMappingURL=CareTeam.d.ts.map