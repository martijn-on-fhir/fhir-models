import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import { Timing } from '../backbone/Timing';
export declare class DeviceUseStatement extends DomainResource {
    readonly resourceType: "DeviceUseStatement";
    basedOn?: Reference[];
    bodySite?: CodeableConcept;
    derivedFrom?: Reference[];
    device?: Reference;
    identifier?: Identifier[];
    note?: Annotation[];
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[];
    recordedOn?: string;
    _recordedOn?: Element;
    source?: Reference;
    status?: ('active' | 'completed' | 'entered-in-error' | 'intended' | 'stopped' | 'on-hold');
    _status?: Element;
    subject?: Reference;
    timingTiming?: Timing;
    timingPeriod?: Period;
    timingDateTime?: string;
    _timingDateTime?: Element;
    constructor(source?: Partial<DeviceUseStatement>);
}
//# sourceMappingURL=DeviceUseStatement.d.ts.map