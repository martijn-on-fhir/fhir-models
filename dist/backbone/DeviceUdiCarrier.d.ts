import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
export declare class DeviceUdiCarrier extends BackboneElement {
    carrierAIDC?: string;
    _carrierAIDC?: Element;
    carrierHRF?: string;
    _carrierHRF?: Element;
    deviceIdentifier?: string;
    _deviceIdentifier?: Element;
    entryType?: ('barcode' | 'rfid' | 'manual' | 'card' | 'self-reported' | 'unknown');
    _entryType?: Element;
    issuer?: string;
    _issuer?: Element;
    jurisdiction?: string;
    _jurisdiction?: Element;
    constructor(source?: Partial<DeviceUdiCarrier>);
}
//# sourceMappingURL=DeviceUdiCarrier.d.ts.map