import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { DeviceMetricCalibration } from '../backbone/DeviceMetricCalibration';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import { Timing } from '../backbone/Timing';
export declare class DeviceMetric extends DomainResource {
    readonly resourceType: "DeviceMetric";
    calibration?: DeviceMetricCalibration[];
    category?: ('measurement' | 'setting' | 'calculation' | 'unspecified');
    _category?: Element;
    color?: ('black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white');
    _color?: Element;
    identifier?: Identifier[];
    measurementPeriod?: Timing;
    operationalStatus?: ('on' | 'off' | 'standby' | 'entered-in-error');
    _operationalStatus?: Element;
    parent?: Reference;
    source?: Reference;
    type?: CodeableConcept;
    unit?: CodeableConcept;
    constructor(source?: Partial<DeviceMetric>);
}
//# sourceMappingURL=DeviceMetric.d.ts.map