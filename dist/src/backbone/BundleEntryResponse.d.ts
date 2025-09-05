import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Resource } from '../base';
export declare class BundleEntryResponse extends BackboneElement {
    etag?: string;
    _etag?: Element;
    lastModified?: string;
    _lastModified?: Element;
    location?: string;
    _location?: Element;
    outcome?: Resource;
    status?: string;
    _status?: Element;
    constructor(source?: Partial<BundleEntryResponse>);
}
//# sourceMappingURL=BundleEntryResponse.d.ts.map