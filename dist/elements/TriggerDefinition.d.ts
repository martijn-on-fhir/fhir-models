import 'reflect-metadata';
import { Element } from '../base/Element';
import { DataRequirement } from './DataRequirement';
import { Expression } from './Expression';
import { Reference } from './Reference';
import { Timing } from '../backbone';
export declare class TriggerDefinition extends Element {
    condition?: Expression;
    data?: DataRequirement[];
    name?: string;
    _name?: Element;
    timingTiming?: Timing;
    timingReference?: Reference;
    timingDate?: string;
    _timingDate?: Element;
    timingDateTime?: string;
    _timingDateTime?: Element;
    type: ('named-event' | 'periodic' | 'data-changed' | 'data-added' | 'data-modified' | 'data-removed' | 'data-accessed' | 'data-access-ended');
    _type?: Element;
    constructor(source?: Partial<TriggerDefinition>);
}
//# sourceMappingURL=TriggerDefinition.d.ts.map