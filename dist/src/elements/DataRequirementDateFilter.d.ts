import 'reflect-metadata';
import { Element } from '../base/Element';
import { Period } from './Period';
import { Duration } from './Duration';
export declare class DataRequirementDateFilter extends Element {
    path?: string;
    _path?: Element;
    searchParam?: string;
    _searchParam?: Element;
    valueDateTime?: string;
    _valueDateTime?: Element;
    valuePeriod?: Period;
    valueDuration?: Duration;
    constructor(source?: Partial<DataRequirementDateFilter>);
}
//# sourceMappingURL=DataRequirementDateFilter.d.ts.map