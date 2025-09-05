import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
export declare class BundleEntryRequest extends BackboneElement {
    ifMatch?: string;
    _ifMatch?: Element;
    ifModifiedSince?: string;
    _ifModifiedSince?: Element;
    ifNoneExist?: string;
    _ifNoneExist?: Element;
    ifNoneMatch?: string;
    _ifNoneMatch?: Element;
    method?: ('GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'PATCH');
    _method?: Element;
    url?: string;
    _url?: Element;
    constructor(source?: Partial<BundleEntryRequest>);
}
//# sourceMappingURL=BundleEntryRequest.d.ts.map