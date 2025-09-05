import 'reflect-metadata';
import { Element } from '../base/Element';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Reference } from './Reference';
export declare class UsageContext extends Element {
    code: Coding;
    valueCodeableConcept?: CodeableConcept;
    valueQuantity?: Quantity;
    valueRange?: Range;
    valueReference?: Reference;
    constructor(source?: Partial<UsageContext>);
}
//# sourceMappingURL=UsageContext.d.ts.map