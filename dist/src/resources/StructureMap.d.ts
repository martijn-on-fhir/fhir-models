import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { StructureMapGroup } from '../backbone/StructureMapGroup';
import { StructureMapStructure } from '../backbone/StructureMapStructure';
export declare class StructureMap extends DomainResource {
    readonly resourceType: "StructureMap";
    contact?: ContactDetail[];
    copyright?: string;
    _copyright?: Element;
    date?: string;
    _date?: Element;
    description?: string;
    _description?: Element;
    experimental?: boolean;
    _experimental?: Element;
    group?: StructureMapGroup[];
    identifier?: Identifier[];
    import?: string[];
    _import?: Element[];
    jurisdiction?: CodeableConcept[];
    name?: string;
    _name?: Element;
    publisher?: string;
    _publisher?: Element;
    purpose?: string;
    _purpose?: Element;
    status?: ('draft' | 'active' | 'retired' | 'unknown');
    _status?: Element;
    structure?: StructureMapStructure[];
    title?: string;
    _title?: Element;
    constructor(source?: Partial<StructureMap>);
}
//# sourceMappingURL=StructureMap.d.ts.map