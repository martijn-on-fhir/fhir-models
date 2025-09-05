import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { AppointmentParticipant } from '../backbone/AppointmentParticipant';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class Appointment extends DomainResource {
    readonly resourceType: "Appointment";
    appointmentType?: CodeableConcept;
    basedOn?: Reference[];
    cancelationReason?: CodeableConcept;
    comment?: string;
    _comment?: Element;
    created?: string;
    _created?: Element;
    description?: string;
    _description?: Element;
    end?: string;
    _end?: Element;
    identifier?: Identifier[];
    minutesDuration?: number;
    participant?: AppointmentParticipant[];
    patientInstruction?: string;
    _patientInstruction?: Element;
    priority?: number;
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[];
    requestedPeriod?: Period[];
    serviceCategory?: CodeableConcept[];
    serviceType?: CodeableConcept[];
    slot?: Reference[];
    specialty?: CodeableConcept[];
    start?: string;
    constructor(source?: Partial<Appointment>);
}
//# sourceMappingURL=Appointment.d.ts.map