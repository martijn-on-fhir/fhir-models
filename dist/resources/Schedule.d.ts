import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class Schedule extends DomainResource {
    readonly resourceType: "Schedule";
    active?: boolean;
    _active?: Element;
    actor?: Reference[];
    comment?: string;
    _comment?: Element;
    identifier?: Identifier[];
    planningHorizon?: Period;
    serviceCategory?: CodeableConcept[];
    serviceType?: CodeableConcept[];
    specialty?: CodeableConcept[];
    constructor(source?: Partial<Schedule>);
}
//# sourceMappingURL=Schedule.d.ts.map