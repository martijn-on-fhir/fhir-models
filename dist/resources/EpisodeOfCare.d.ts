import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { EpisodeOfCareDiagnosis } from '../backbone/EpisodeOfCareDiagnosis';
import { EpisodeOfCareStatusHistory } from '../backbone/EpisodeOfCareStatusHistory';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class EpisodeOfCare extends DomainResource {
    readonly resourceType: "EpisodeOfCare";
    account?: Reference[];
    careManager?: Reference;
    diagnosis?: EpisodeOfCareDiagnosis[];
    identifier?: Identifier[];
    managingOrganization?: Reference;
    patient?: Reference;
    period?: Period;
    referralRequest?: Reference[];
    status?: ('planned' | 'waitlist' | 'active' | 'onhold' | 'finished' | 'cancelled' | 'entered-in-error');
    _status?: Element;
    statusHistory?: EpisodeOfCareStatusHistory[];
    team?: Reference[];
    type?: CodeableConcept[];
    constructor(source?: Partial<EpisodeOfCare>);
}
//# sourceMappingURL=EpisodeOfCare.d.ts.map