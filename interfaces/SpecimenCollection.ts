import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Duration } from './Duration';
import { Element } from './Element';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * Details concerning the specimen collection.
 */
export interface SpecimenCollection extends BackboneElement {

  /**
   * If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [bodySite](extension-bodysite.html).
   */
  bodySite?: CodeableConcept | undefined;
  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  collectedDateTime?: string | undefined;
  _collectedDateTime?: Element | undefined;
  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  collectedPeriod?: Period | undefined;
  /**
   * Person who collected the specimen.
   */
  collector?: Reference | undefined;
  /**
   * The span of time over which the collection of a specimen occurred.
   */
  duration?: Duration | undefined;
  /**
   * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
   */
  fastingStatusCodeableConcept?: CodeableConcept | undefined;
  /**
   * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
   */
  fastingStatusDuration?: Duration | undefined;
  /**
   * A coded value specifying the technique that is used to perform the procedure.
   */
  method?: CodeableConcept | undefined;
  /**
   * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
   */
  quantity?: Quantity | undefined;

}