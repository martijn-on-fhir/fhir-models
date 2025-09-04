import { Address } from './Address';
import { BackboneElement } from './BackboneElement';
import { ClaimItemDetail } from './ClaimItemDetail';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Money } from './Money';
import { Neonatal } from './Neonatal';
import { Period } from './Period';
import { Providing } from './Providing';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
 */
export interface ClaimItem extends BackboneElement {

  /**
   * For example: Providing a tooth code, allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
   */
  bodySite?: CodeableConcept | undefined;
  /**
   * CareTeam members related to this service or product.
   */
  careTeamSequence?: number[] | undefined;
  /**
   * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   */
  category?: CodeableConcept | undefined;
  /**
   * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
   */
  detail?: ClaimItemDetail[] | undefined;
  /**
   * Diagnosis applicable for this service or product.
   */
  diagnosisSequence?: number[] | undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
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
   * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
   */
  modifier?: CodeableConcept[] | undefined;
  /**
   * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
   */
  net?: Money | undefined;
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