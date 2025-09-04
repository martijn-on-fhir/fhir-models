import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { MedicinalProductContraindicationOtherTherapy } from './MedicinalProductContraindicationOtherTherapy';
import { Population } from './Population';
import { Reference } from './Reference';

/**
 * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
 */
export interface MedicinalProductContraindication extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'MedicinalProductContraindication';
  /**
   * A comorbidity (concurrent condition) or coinfection.
   */
  comorbidity?: CodeableConcept[] | undefined;
  /**
   * The disease, symptom or procedure for the contraindication.
   */
  disease?: CodeableConcept | undefined;
  /**
   * The status of the disease or symptom for the contraindication.
   */
  diseaseStatus?: CodeableConcept | undefined;
  /**
   * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
   */
  otherTherapy?: MedicinalProductContraindicationOtherTherapy[] | undefined;
  /**
   * The population group to which this applies.
   */
  population?: Population[] | undefined;
  /**
   * The medication for which this is an indication.
   */
  subject?: Reference[] | undefined;
  /**
   * Information about the use of the medicinal product in relation to other therapies as part of the indication.
   */
  therapeuticIndication?: Reference[] | undefined;

}