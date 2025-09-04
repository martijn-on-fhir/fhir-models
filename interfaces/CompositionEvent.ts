import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * The event needs to be consistent with the type element, though can provide further information if desired.
 */
export interface CompositionEvent extends BackboneElement {

  /**
   * An event can further specialize the act inherent in the typeCode, such as where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more eventCodes are included, they SHALL NOT conflict with the values inherent in the classCode, practiceSettingCode or typeCode, as such a conflict would create an ambiguous situation. This short list of codes is provided to be used as key words for certain types of queries.
   */
  code?: CodeableConcept[] | undefined;
  /**
   * The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.
   */
  detail?: Reference[] | undefined;
  /**
   * The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.
   */
  period?: Period | undefined;

}