import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Reference } from '../elements/Reference';
export declare class MessageHeaderDestination extends BackboneElement {
    endpoint?: string;
    _endpoint?: Element;
    name?: string;
    _name?: Element;
    receiver?: Reference;
    target?: Reference;
    constructor(source?: Partial<MessageHeaderDestination>);
}
//# sourceMappingURL=MessageHeaderDestination.d.ts.map