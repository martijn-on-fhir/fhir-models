import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { TimingRepeat } from '../elements/TimingRepeat';
export declare class Timing extends BackboneElement {
    code?: CodeableConcept;
    event?: string[];
    _event?: Element[];
    repeat?: TimingRepeat;
    constructor(source?: Partial<Timing>);
}
//# sourceMappingURL=Timing.d.ts.map