import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { MessageDefinitionAllowedResponse } from '../backbone/MessageDefinitionAllowedResponse';
import { MessageDefinitionFocus } from '../backbone/MessageDefinitionFocus';
export declare class MessageDefinition extends DomainResource {
    readonly resourceType: "MessageDefinition";
    allowedResponse?: MessageDefinitionAllowedResponse[];
    base?: string;
    _base?: Element;
    category?: ('consequence' | 'currency' | 'notification');
    _category?: Element;
    contact?: ContactDetail[];
    copyright?: string;
    _copyright?: Element;
    date?: string;
    _date?: Element;
    description?: string;
    _description?: Element;
    eventCoding?: Coding;
    eventUri?: string;
    _eventUri?: Element;
    experimental?: boolean;
    _experimental?: Element;
    focus?: MessageDefinitionFocus[];
    graph?: string[];
    _graph?: Element[];
    identifier?: Identifier[];
    jurisdiction?: CodeableConcept[];
    name?: string;
    _name?: Element;
    parent?: string[];
    constructor(source?: Partial<MessageDefinition>);
}
//# sourceMappingURL=MessageDefinition.d.ts.map