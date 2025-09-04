import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
export declare class SubscriptionChannel extends BackboneElement {
    endpoint?: string;
    _endpoint?: Element;
    header?: string[];
    _header?: Element[];
    payload?: string;
    _payload?: Element;
    type?: ('rest-hook' | 'websocket' | 'email' | 'sms' | 'message');
    _type?: Element;
    constructor(source?: Partial<SubscriptionChannel>);
}
//# sourceMappingURL=SubscriptionChannel.d.ts.map