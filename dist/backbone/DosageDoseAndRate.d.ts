import 'reflect-metadata';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
import { Ratio } from '../elements/Ratio';
export declare class DosageDoseAndRate extends Element {
    doseRange?: Range;
    doseQuantity?: Quantity;
    rateRatio?: Ratio;
    rateRange?: Range;
    rateQuantity?: Quantity;
    type?: CodeableConcept;
    constructor(source?: Partial<DosageDoseAndRate>);
}
//# sourceMappingURL=DosageDoseAndRate.d.ts.map