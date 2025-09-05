import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { NamingSystemUniqueId } from '../backbone/NamingSystemUniqueId';
import { UsageContext } from '../elements/UsageContext';
export declare class NamingSystem extends DomainResource {
    readonly resourceType: "NamingSystem";
    contact?: ContactDetail[];
    date?: string;
    _date?: Element;
    description?: string;
    _description?: Element;
    jurisdiction?: CodeableConcept[];
    kind?: ('codesystem' | 'identifier' | 'root');
    _kind?: Element;
    name?: string;
    _name?: Element;
    publisher?: string;
    _publisher?: Element;
    responsible?: string;
    _responsible?: Element;
    status?: ('draft' | 'active' | 'retired' | 'unknown');
    _status?: Element;
    type?: CodeableConcept;
    uniqueId?: NamingSystemUniqueId[];
    usage?: string;
    _usage?: Element;
    useContext?: UsageContext[];
    constructor(source?: Partial<NamingSystem>);
}
//# sourceMappingURL=NamingSystem.d.ts.map