import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class AppointmentParticipant extends BackboneElement {
    actor?: Reference;
    period?: Period;
    required?: ('required' | 'optional' | 'information-only');
    _required?: Element;
    status?: ('accepted' | 'declined' | 'tentative' | 'needs-action');
    _status?: Element;
    type?: CodeableConcept[];
    constructor(source?: Partial<AppointmentParticipant>);
}
//# sourceMappingURL=AppointmentParticipant.d.ts.map