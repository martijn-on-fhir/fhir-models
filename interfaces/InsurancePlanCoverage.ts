import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { InsurancePlanCoverageBenefit } from './InsurancePlanCoverageBenefit';
import { Reference } from './Reference';

/**
 * Details about the coverage offered by the insurance product.
 */
export interface InsurancePlanCoverage extends BackboneElement {

  /**
   * Specific benefits under this type of coverage.
   */
  benefit: InsurancePlanCoverageBenefit[];
  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  network?: Reference[] | undefined;
  /**
   * Type of coverage  (Medical; Dental; Mental Health; Substance Abuse; Vision; Drug; Short Term; Long Term Care; Hospice; Home Health).
   */
  type: CodeableConcept;

}