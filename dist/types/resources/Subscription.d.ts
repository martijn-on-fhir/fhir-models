import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { ContactPoint } from '../elements/ContactPoint';
import { SubscriptionChannel } from '../backbone/SubscriptionChannel';
export declare class Subscription extends DomainResource {
    readonly resourceType: "Subscription";
    channel?: SubscriptionChannel;
    contact?: ContactPoint[];
    criteria?: string;
    _criteria?: Element;
    end?: string;
    _end?: Element;
    error?: string;
    _error?: Element;
    reason?: string;
    _reason?: Element;
    status?: ('requested' | 'active' | 'error' | 'off');
    _status?: Element;
    constructor(source?: Partial<Subscription>);
}
//# sourceMappingURL=Subscription.d.ts.map