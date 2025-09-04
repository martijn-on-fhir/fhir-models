import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { AuditEventAgent } from '../backbone/AuditEventAgent';
import { AuditEventEntity } from '../backbone/AuditEventEntity';
import { AuditEventSource } from '../backbone/AuditEventSource';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { Period } from '../elements/Period';
export declare class AuditEvent extends DomainResource {
    readonly resourceType: "AuditEvent";
    action?: string;
    _action?: Element;
    agent?: AuditEventAgent[];
    entity?: AuditEventEntity[];
    outcome?: string;
    _outcome?: Element;
    outcomeDesc?: string;
    _outcomeDesc?: Element;
    period?: Period;
    purposeOfEvent?: CodeableConcept[];
    recorded?: string;
    _recorded?: Element;
    source?: AuditEventSource;
    subtype?: Coding[];
    type?: Coding;
    constructor(source?: Partial<AuditEvent>);
}
//# sourceMappingURL=AuditEvent.d.ts.map