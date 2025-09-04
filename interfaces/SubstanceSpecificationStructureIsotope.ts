import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Identifier } from './Identifier';
import { Quantity } from './Quantity';
import { SubstanceSpecificationStructureIsotopeMolecularWeight } from './SubstanceSpecificationStructureIsotopeMolecularWeight';

/**
 * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
 */
export interface SubstanceSpecificationStructureIsotope extends BackboneElement {

  /**
   * Half life - for a non-natural nuclide.
   */
  halfLife?: Quantity | undefined;
  /**
   * Substance identifier for each non-natural or radioisotope.
   */
  identifier?: Identifier | undefined;
  /**
   * The molecular weight or weight range (for proteins, polymers or nucleic acids).
   */
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight | undefined;
  /**
   * Substance name for each non-natural or radioisotope.
   */
  name?: CodeableConcept | undefined;
  /**
   * The type of isotopic substitution present in a single substance.
   */
  substitution?: CodeableConcept | undefined;

}