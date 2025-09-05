import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { StructureDefinitionContext } from '../backbone/StructureDefinitionContext';
import { StructureDefinitionDifferential } from '../backbone/StructureDefinitionDifferential';
export declare class StructureDefinition extends DomainResource {
    readonly resourceType: "StructureDefinition";
    abstract?: boolean;
    _abstract?: Element;
    baseDefinition?: string;
    _baseDefinition?: Element;
    contact?: ContactDetail[];
    context?: StructureDefinitionContext[];
    contextInvariant?: string[];
    _contextInvariant?: Element[];
    copyright?: string;
    _copyright?: Element;
    date?: string;
    _date?: Element;
    derivation?: ('specialization' | 'constraint');
    _derivation?: Element;
    description?: string;
    _description?: Element;
    differential?: StructureDefinitionDifferential;
    experimental?: boolean;
    _experimental?: Element;
    fhirVersion?: string;
    _fhirVersion?: Element;
    identifier?: Identifier[];
    jurisdiction?: CodeableConcept[];
    keyword?: Coding[];
    kind?: ('primitive-type' | 'complex-type' | 'resource' | 'logical');
    constructor(source?: Partial<StructureDefinition>);
}
//# sourceMappingURL=StructureDefinition.d.ts.map