import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { MessageHeaderDestination } from '../backbone/MessageHeaderDestination';
import { MessageHeaderResponse } from '../backbone/MessageHeaderResponse';
import { MessageHeaderSource } from '../backbone/MessageHeaderSource';
import { Reference } from '../elements/Reference';
export declare class MessageHeader extends DomainResource {
    readonly resourceType: "MessageHeader";
    author?: Reference;
    definition?: string;
    _definition?: Element;
    destination?: MessageHeaderDestination[];
    enterer?: Reference;
    eventCoding?: Coding;
    eventUri?: string;
    _eventUri?: Element;
    focus?: Reference[];
    reason?: CodeableConcept;
    response?: MessageHeaderResponse;
    responsible?: Reference;
    sender?: Reference;
    source?: MessageHeaderSource;
    constructor(source?: Partial<MessageHeader>);
}
//# sourceMappingURL=MessageHeader.d.ts.map