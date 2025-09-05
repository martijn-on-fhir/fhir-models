import 'reflect-metadata';
import { Element } from '../base/Element';
import { Duration } from './Duration';
import { Period } from './Period';
import { Range } from './Range';
export declare class TimingRepeat extends Element {
    boundsDuration?: Duration;
    boundsRange?: Range;
    boundsPeriod?: Period;
    count?: number;
    countMax?: number;
    dayOfWeek?: Array<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'>;
    _dayOfWeek?: Element[];
    duration?: number;
    durationMax?: number;
    durationUnit?: 's' | 'min' | 'h' | 'd' | 'wk' | 'mo' | 'a';
    _durationUnit?: Element;
    frequency?: number;
    frequencyMax?: number;
    offset?: number;
    period?: number;
    periodMax?: number;
    periodUnit?: 's' | 'min' | 'h' | 'd' | 'wk' | 'mo' | 'a';
    _periodUnit?: Element;
    timeOfDay?: string[];
    _timeOfDay?: Element[];
    when?: string[];
    _when?: Element[];
    constructor(source?: Partial<TimingRepeat>);
}
//# sourceMappingURL=TimingRepeat.d.ts.map