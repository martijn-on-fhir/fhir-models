import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Reference } from './Reference';
import { SubstanceSpecificationStructureIsotope } from './SubstanceSpecificationStructureIsotope';
import { SubstanceSpecificationStructureIsotopeMolecularWeight } from './SubstanceSpecificationStructureIsotopeMolecularWeight';
import { SubstanceSpecificationStructureRepresentation } from './SubstanceSpecificationStructureRepresentation';

/**
 * Structural information.
 */
export interface SubstanceSpecificationStructure extends BackboneElement {

  /**
   * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
   */
  isotope?: SubstanceSpecificationStructureIsotope[] | undefined;
  /**
   * Molecular formula.
   */
  molecularFormula?: string | undefined;
  _molecularFormula?: Element | undefined;
  /**
   * Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot.
   */
  molecularFormulaByMoiety?: string | undefined;
  _molecularFormulaByMoiety?: Element | undefined;
  /**
   * The molecular weight or weight range (for proteins, polymers or nucleic acids).
   */
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight | undefined;
  /**
   * Optical activity type.
   */
  opticalActivity?: CodeableConcept | undefined;
  /**
   * Molecular structural representation.
   */
  representation?: SubstanceSpecificationStructureRepresentation[] | undefined;
  /**
   * Supporting literature.
   */
  source?: Reference[] | undefined;
  /**
   * Stereochemistry type.
   */
  stereochemistry?: CodeableConcept | undefined;

}