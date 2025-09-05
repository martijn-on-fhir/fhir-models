import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CompartmentDefinitionResource } from '../backbone/CompartmentDefinitionResource';
import { ContactDetail } from '../elements/ContactDetail';
import { UsageContext } from '../elements/UsageContext';
export declare class CompartmentDefinition extends DomainResource {
    readonly resourceType: "CompartmentDefinition";
    code?: ('Patient' | 'Encounter' | 'RelatedPerson' | 'Practitioner' | 'Device');
    _code?: Element;
    contact?: ContactDetail[];
    date?: string;
    _date?: Element;
    description?: string;
    _description?: Element;
    experimental?: boolean;
    _experimental?: Element;
    name?: string;
    _name?: Element;
    publisher?: string;
    _publisher?: Element;
    purpose?: string;
    _purpose?: Element;
    resource?: CompartmentDefinitionResource[];
    search?: boolean;
    _search?: Element;
    status?: ('draft' | 'active' | 'retired' | 'unknown');
    _status?: Element;
    url?: string;
    _url?: Element;
    useContext?: UsageContext[];
    version?: string;
    _version?: Element;
    constructor(source?: Partial<CompartmentDefinition>);
}
//# sourceMappingURL=CompartmentDefinition.d.ts.map