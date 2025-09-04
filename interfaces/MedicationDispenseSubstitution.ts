import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
 */
export interface MedicationDispenseSubstitution extends BackboneElement {

  /**
   * Indicates the reason for the substitution (or lack of substitution) from what was prescribed.
   */
  reason?: CodeableConcept[] | undefined;
  /**
   * The person or organization that has primary responsibility for the substitution.
   */
  responsibleParty?: Reference[] | undefined;
  /**
   * A code signifying whether a different drug was dispensed from what was prescribed.
   */
  type?: CodeableConcept | undefined;
  /**
   * True if the dispenser dispensed a different drug or product from what was prescribed.
   */
  wasSubstituted: boolean;
  _wasSubstituted?: Element | undefined;

}