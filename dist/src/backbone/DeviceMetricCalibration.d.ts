import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
export declare class DeviceMetricCalibration extends BackboneElement {
    state?: ('not-calibrated' | 'calibration-required' | 'calibrated' | 'unspecified');
    _state?: Element;
    time?: string;
    _time?: Element;
    type?: ('unspecified' | 'offset' | 'gain' | 'two-point');
    _type?: Element;
    constructor(source?: Partial<DeviceMetricCalibration>);
}
//# sourceMappingURL=DeviceMetricCalibration.d.ts.map