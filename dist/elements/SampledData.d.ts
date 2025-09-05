import 'reflect-metadata';
import { Element } from '../base/Element';
import { Quantity } from './Quantity';
export declare class SampledData extends Element {
    data?: string;
    _data?: Element;
    dimensions: number;
    factor?: number;
    lowerLimit?: number;
    origin: Quantity;
    period: number;
    upperLimit?: number;
    constructor(source?: Partial<SampledData>);
}
//# sourceMappingURL=SampledData.d.ts.map