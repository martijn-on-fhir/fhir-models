import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';
export declare class MessageHeaderResponse extends BackboneElement {
    code?: ('ok' | 'transient-error' | 'fatal-error');
    _code?: Element;
    details?: Reference;
    identifier?: string;
    _identifier?: Element;
    constructor(source?: Partial<MessageHeaderResponse>);
}
//# sourceMappingURL=MessageHeaderResponse.d.ts.map