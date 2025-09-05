import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import { SubstanceSpecificationCode } from '../backbone/SubstanceSpecificationCode';
import { SubstanceSpecificationMoiety } from '../backbone/SubstanceSpecificationMoiety';
import { SubstanceSpecificationName } from '../backbone/SubstanceSpecificationName';
import { SubstanceSpecificationProperty } from '../backbone/SubstanceSpecificationProperty';
import { SubstanceSpecificationRelationship } from '../backbone/SubstanceSpecificationRelationship';
import { SubstanceSpecificationStructure } from '../backbone/SubstanceSpecificationStructure';
import { SubstanceSpecificationStructureIsotopeMolecularWeight } from '../backbone/SubstanceSpecificationStructureIsotopeMolecularWeight';
export declare class SubstanceSpecification extends DomainResource {
    readonly resourceType: "SubstanceSpecification";
    code?: SubstanceSpecificationCode[];
    comment?: string;
    _comment?: Element;
    description?: string;
    _description?: Element;
    domain?: CodeableConcept;
    identifier?: Identifier;
    moiety?: SubstanceSpecificationMoiety[];
    molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight[];
    name?: SubstanceSpecificationName[];
    nucleicAcid?: Reference;
    polymer?: Reference;
    property?: SubstanceSpecificationProperty[];
    protein?: Reference;
    referenceInformation?: Reference;
    relationship?: SubstanceSpecificationRelationship[];
    source?: Reference[];
    sourceMaterial?: Reference;
    status?: CodeableConcept;
    structure?: SubstanceSpecificationStructure;
    type?: CodeableConcept;
    constructor(source?: Partial<SubstanceSpecification>);
}
//# sourceMappingURL=SubstanceSpecification.d.ts.map