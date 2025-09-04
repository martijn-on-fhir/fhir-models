import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
export declare class OperationDefinition extends DomainResource {
    readonly resourceType: "OperationDefinition";
    affectsState?: boolean;
    _affectsState?: Element;
    base?: string;
    _base?: Element;
    code?: string;
    _code?: Element;
    comment?: string;
    _comment?: Element;
    contact?: ContactDetail[];
    date?: string;
    _date?: Element;
    description?: string;
    _description?: Element;
    experimental?: boolean;
    _experimental?: Element;
    inputProfile?: string;
    _inputProfile?: Element;
    instance?: boolean;
    _instance?: Element;
    jurisdiction?: CodeableConcept[];
    kind?: ('operation' | 'query');
    _kind?: Element;
    name?: string;
    _name?: Element;
    outputProfile?: string;
    constructor(source?: Partial<OperationDefinition>);
}
//# sourceMappingURL=OperationDefinition.d.ts.map