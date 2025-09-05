import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Quantity } from '../elements/Quantity';
import { SubstanceSpecificationStructureIsotopeMolecularWeight } from './SubstanceSpecificationStructureIsotopeMolecularWeight';
export declare class SubstanceSpecificationStructureIsotope extends BackboneElement {
    halfLife?: Quantity;
    identifier?: Identifier;
    molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;
    name?: CodeableConcept;
    substitution?: CodeableConcept;
    constructor(source?: Partial<SubstanceSpecificationStructureIsotope>);
}
//# sourceMappingURL=SubstanceSpecificationStructureIsotope.d.ts.map