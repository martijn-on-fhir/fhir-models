import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Period } from '../elements/Period';
export declare class EncounterStatusHistory extends BackboneElement {
    period?: Period;
    status?: ('planned' | 'arrived' | 'triaged' | 'in-progress' | 'onleave' | 'finished' | 'cancelled' | 'entered-in-error' | 'unknown');
    _status?: Element;
    constructor(source?: Partial<EncounterStatusHistory>);
}
//# sourceMappingURL=EncounterStatusHistory.d.ts.map