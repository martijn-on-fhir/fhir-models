import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class TaskRestriction extends BackboneElement {
    period?: Period;
    recipient?: Reference[];
    repetitions?: number;
    constructor(source?: Partial<TaskRestriction>);
}
//# sourceMappingURL=TaskRestriction.d.ts.map