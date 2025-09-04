import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
 */
export interface MedicationKnowledgeRegulatorySubstitution extends BackboneElement {

  /**
   * Specifies if regulation allows for changes in the medication when dispensing.
   */
  allowed: boolean;
  _allowed?: Element | undefined;
  /**
   * Specifies the type of substitution allowed.
   */
  type: CodeableConcept;

}