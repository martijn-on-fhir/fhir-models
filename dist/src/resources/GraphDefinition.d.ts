import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { GraphDefinitionLink } from '../backbone/GraphDefinitionLink';
import { UsageContext } from '../elements/UsageContext';
export declare class GraphDefinition extends DomainResource {
    readonly resourceType: "GraphDefinition";
    contact?: ContactDetail[];
    date?: string;
    _date?: Element;
    description?: string;
    _description?: Element;
    experimental?: boolean;
    _experimental?: Element;
    jurisdiction?: CodeableConcept[];
    link?: GraphDefinitionLink[];
    name?: string;
    _name?: Element;
    profile?: string;
    _profile?: Element;
    publisher?: string;
    _publisher?: Element;
    purpose?: string;
    _purpose?: Element;
    start?: string;
    _start?: Element;
    status?: ('draft' | 'active' | 'retired' | 'unknown');
    _status?: Element;
    url?: string;
    _url?: Element;
    useContext?: UsageContext[];
    version?: string;
    constructor(source?: Partial<GraphDefinition>);
}
//# sourceMappingURL=GraphDefinition.d.ts.map