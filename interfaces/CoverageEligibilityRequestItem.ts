import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { CoverageEligibilityRequestItemDiagnosis } from './CoverageEligibilityRequestItemDiagnosis';
import { Money } from './Money';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
 */
export interface CoverageEligibilityRequestItem extends BackboneElement {

  /**
   * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   */
  category?: CodeableConcept | undefined;
  /**
   * The plan/proposal/order describing the proposed service in detail.
   */
  detail?: Reference[] | undefined;
  /**
   * Patient diagnosis for which care is sought.
   */
  diagnosis?: CoverageEligibilityRequestItemDiagnosis[] | undefined;
  /**
   * Facility where the services will be provided.
   */
  facility?: Reference | undefined;
  /**
   * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   */
  modifier?: CodeableConcept[] | undefined;
  /**
   * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
   */
  productOrService?: CodeableConcept | undefined;
  /**
   * The practitioner who is responsible for the product or service to be rendered to the patient.
   */
  provider?: Reference | undefined;
  /**
   * The number of repetitions of a service or product.
   */
  quantity?: Quantity | undefined;
  /**
   * Exceptions, special conditions and supporting information applicable for this service or product line.
   */
  supportingInfoSequence?: number[] | undefined;
  /**
   * The amount charged to the patient by the provider for a single unit.
   */
  unitPrice?: Money | undefined;

}