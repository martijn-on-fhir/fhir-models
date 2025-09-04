import { Address } from './Address';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { ExplanationOfBenefitItemAdjudication } from './ExplanationOfBenefitItemAdjudication';
import { ExplanationOfBenefitItemDetail } from './ExplanationOfBenefitItemDetail';
import { Money } from './Money';
import { Neonatal } from './Neonatal';
import { Period } from './Period';
import { Providing } from './Providing';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
 */
export interface ExplanationOfBenefitItem extends BackboneElement {

  /**
   * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
   */
  adjudication?: ExplanationOfBenefitItemAdjudication[] | undefined;
  /**
   * For example: Providing a tooth code, allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
   */
  bodySite?: CodeableConcept | undefined;
  /**
   * Care team members related to this service or product.
   */
  careTeamSequence?: number[] | undefined;
  /**
   * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   */
  category?: CodeableConcept | undefined;
  /**
   * Second-tier of goods and services.
   */
  detail?: ExplanationOfBenefitItemDetail[] | undefined;
  /**
   * Diagnoses applicable for this service or product.
   */
  diagnosisSequence?: number[] | undefined;
  /**
   * A billed item may include goods or services provided in multiple encounters.
   */
  encounter?: Reference[] | undefined;
  /**
   * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
   */
  factor?: number | undefined;
  /**
   * Exceptions, special conditions and supporting information applicable for this service or product.
   */
  informationSequence?: number[] | undefined;
  /**
   * Where the product or service was provided.
   */
  locationCodeableConcept?: CodeableConcept | undefined;
  /**
   * Where the product or service was provided.
   */
  locationAddress?: Address | undefined;
  /**
   * Where the product or service was provided.
   */
  locationReference?: Reference | undefined;
  /**
   * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   */
  modifier?: CodeableConcept[] | undefined;
  /**
   * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
   */
  net?: Money | undefined;
  /**
   * The numbers associated with notes below which apply to the adjudication of this item.
   */
  noteNumber?: number[] | undefined;
  /**
   * Procedures applicable for this service or product.
   */
  procedureSequence?: number[] | undefined;
  /**
   * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
   */
  productOrService: CodeableConcept;
  /**
   * For example: Neonatal program, child dental program or drug users recovery program.
   */
  programCode?: CodeableConcept[] | undefined;
  /**
   * The number of repetitions of a service or product.
   */
  quantity?: Quantity | undefined;
  /**
   * The type of revenue or cost center providing the product and/or service.
   */
  revenue?: CodeableConcept | undefined;
  /**
   * A number to uniquely identify item entries.
   */
  sequence: number;
  /**
   * The date or dates when the service or product was supplied, performed or completed.
   */
  servicedDate?: string | undefined;
  _servicedDate?: Element | undefined;
  /**
   * The date or dates when the service or product was supplied, performed or completed.
   */
  servicedPeriod?: Period | undefined;
  /**
   * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
   */
  subSite?: CodeableConcept[] | undefined;
  /**
   * Unique Device Identifiers associated with this line item.
   */
  udi?: Reference[] | undefined;
  /**
   * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
   */
  unitPrice?: Money | undefined;

}