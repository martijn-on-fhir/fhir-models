import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Period } from '../elements/Period';
export declare class EpisodeOfCareStatusHistory extends BackboneElement {
    period?: Period;
    status?: ('planned' | 'waitlist' | 'active' | 'onhold' | 'finished' | 'cancelled' | 'entered-in-error');
    _status?: Element;
    constructor(source?: Partial<EpisodeOfCareStatusHistory>);
}
//# sourceMappingURL=EpisodeOfCareStatusHistory.d.ts.map