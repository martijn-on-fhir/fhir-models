import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { MolecularSequenceStructureVariantInner } from './MolecularSequenceStructureVariantInner';
import { MolecularSequenceStructureVariantOuter } from './MolecularSequenceStructureVariantOuter';

/**
 * Information about chromosome structure variation.
 */
export interface MolecularSequenceStructureVariant extends BackboneElement {

  /**
   * Used to indicate if the outer and inner start-end values have the same meaning.
   */
  exact?: boolean | undefined;
  _exact?: Element | undefined;
  /**
   * Structural variant inner.
   */
  inner?: MolecularSequenceStructureVariantInner | undefined;
  /**
   * Length of the variant chromosome.
   */
  length?: number | undefined;
  /**
   * Structural variant outer.
   */
  outer?: MolecularSequenceStructureVariantOuter | undefined;
  /**
   * Information about chromosome structure variation DNA change type.
   */
  variantType?: CodeableConcept | undefined;

}