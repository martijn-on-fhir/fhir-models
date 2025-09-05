import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CapabilityStatementMessagingEndpoint } from './CapabilityStatementMessagingEndpoint';
import { CapabilityStatementMessagingSupportedMessage } from './CapabilityStatementMessagingSupportedMessage';
export declare class CapabilityStatementMessaging extends BackboneElement {
    documentation?: string;
    _documentation?: Element;
    endpoint?: CapabilityStatementMessagingEndpoint[];
    reliableCache?: number;
    supportedMessage?: CapabilityStatementMessagingSupportedMessage[];
    constructor(source?: Partial<CapabilityStatementMessaging>);
}
//# sourceMappingURL=CapabilityStatementMessaging.d.ts.map