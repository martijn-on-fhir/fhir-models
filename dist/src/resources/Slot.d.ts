import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class Slot extends DomainResource {
    readonly resourceType: "Slot";
    appointmentType?: CodeableConcept;
    comment?: string;
    _comment?: Element;
    end?: string;
    _end?: Element;
    identifier?: Identifier[];
    overbooked?: boolean;
    _overbooked?: Element;
    schedule?: Reference;
    serviceCategory?: CodeableConcept[];
    serviceType?: CodeableConcept[];
    specialty?: CodeableConcept[];
    start?: string;
    _start?: Element;
    status?: ('busy' | 'free' | 'busy-unavailable' | 'busy-tentative' | 'entered-in-error');
    _status?: Element;
    constructor(source?: Partial<Slot>);
}
//# sourceMappingURL=Slot.d.ts.map