import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ConceptMapGroup } from '../backbone/ConceptMapGroup';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
export declare class ConceptMap extends DomainResource {
    readonly resourceType: "ConceptMap";
    contact?: ContactDetail[];
    copyright?: string;
    _copyright?: Element;
    date?: string;
    _date?: Element;
    description?: string;
    _description?: Element;
    experimental?: boolean;
    _experimental?: Element;
    group?: ConceptMapGroup[];
    identifier?: Identifier;
    jurisdiction?: CodeableConcept[];
    name?: string;
    _name?: Element;
    publisher?: string;
    _publisher?: Element;
    purpose?: string;
    _purpose?: Element;
    sourceUri?: string;
    _sourceUri?: Element;
    sourceCanonical?: string;
    _sourceCanonical?: Element;
    status?: ('draft' | 'active' | 'retired' | 'unknown');
    _status?: Element;
    targetUri?: string;
    constructor(source?: Partial<ConceptMap>);
}
//# sourceMappingURL=ConceptMap.d.ts.map