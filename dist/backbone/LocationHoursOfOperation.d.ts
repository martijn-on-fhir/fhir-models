import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
export declare class LocationHoursOfOperation extends BackboneElement {
    allDay?: boolean;
    _allDay?: Element;
    closingTime?: string;
    _closingTime?: Element;
    daysOfWeek?: Array<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'>;
    _daysOfWeek?: Element[];
    openingTime?: string;
    _openingTime?: Element;
    constructor(source?: Partial<LocationHoursOfOperation>);
}
//# sourceMappingURL=LocationHoursOfOperation.d.ts.map