import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { MedicinalProductIndicationOtherTherapy } from './MedicinalProductIndicationOtherTherapy';
import { Population } from './Population';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * Indication for the Medicinal Product.
 */
export interface MedicinalProductIndication extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'MedicinalProductIndication';
  /**
   * Comorbidity (concurrent condition) or co-infection as part of the indication.
   */
  comorbidity?: CodeableConcept[] | undefined;
  /**
   * The status of the disease or symptom for which the indication applies.
   */
  diseaseStatus?: CodeableConcept | undefined;
  /**
   * The disease, symptom or procedure that is the indication for treatment.
   */
  diseaseSymptomProcedure?: CodeableConcept | undefined;
  /**
   * Timing or duration information as part of the indication.
   */
  duration?: Quantity | undefined;
  /**
   * The intended effect, aim or strategy to be achieved by the indication.
   */
  intendedEffect?: CodeableConcept | undefined;
  /**
   * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
   */
  otherTherapy?: MedicinalProductIndicationOtherTherapy[] | undefined;
  /**
   * The population group to which this applies.
   */
  population?: Population[] | undefined;
  /**
   * The medication for which this is an indication.
   */
  subject?: Reference[] | undefined;
  /**
   * Describe the undesirable effects of the medicinal product.
   */
  undesirableEffect?: Reference[] | undefined;

}