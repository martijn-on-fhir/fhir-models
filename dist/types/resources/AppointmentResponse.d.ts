import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class AppointmentResponse extends DomainResource {
    readonly resourceType: "AppointmentResponse";
    actor?: Reference;
    appointment?: Reference;
    comment?: string;
    _comment?: Element;
    end?: string;
    _end?: Element;
    identifier?: Identifier[];
    participantStatus?: ('accepted' | 'declined' | 'tentative' | 'needs-action');
    _participantStatus?: Element;
    participantType?: CodeableConcept[];
    start?: string;
    _start?: Element;
    constructor(source?: Partial<AppointmentResponse>);
}
//# sourceMappingURL=AppointmentResponse.d.ts.map