import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
import { SubstanceSpecificationStructureIsotope } from './SubstanceSpecificationStructureIsotope';
import { SubstanceSpecificationStructureIsotopeMolecularWeight } from './SubstanceSpecificationStructureIsotopeMolecularWeight';
import { SubstanceSpecificationStructureRepresentation } from './SubstanceSpecificationStructureRepresentation';
export declare class SubstanceSpecificationStructure extends BackboneElement {
    isotope?: SubstanceSpecificationStructureIsotope[];
    molecularFormula?: string;
    _molecularFormula?: Element;
    molecularFormulaByMoiety?: string;
    _molecularFormulaByMoiety?: Element;
    molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;
    opticalActivity?: CodeableConcept;
    representation?: SubstanceSpecificationStructureRepresentation[];
    source?: Reference[];
    stereochemistry?: CodeableConcept;
    constructor(source?: Partial<SubstanceSpecificationStructure>);
}
//# sourceMappingURL=SubstanceSpecificationStructure.d.ts.map