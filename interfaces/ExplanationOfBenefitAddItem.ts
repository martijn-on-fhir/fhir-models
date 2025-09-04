import { Address } from './Address';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { ExplanationOfBenefitAddItemDetail } from './ExplanationOfBenefitAddItemDetail';
import { ExplanationOfBenefitItemAdjudication } from './ExplanationOfBenefitItemAdjudication';
import { Money } from './Money';
import { Neonatal } from './Neonatal';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * The first-tier service adjudications for payor added product or service lines.
 */
export interface ExplanationOfBenefitAddItem extends BackboneElement {

  /**
   * The adjudication results.
   */
  adjudication?: ExplanationOfBenefitItemAdjudication[] | undefined;
  /**
   * For example, providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
   */
  bodySite?: CodeableConcept | undefined;
  /**
   * The second-tier service adjudications for payor added services.
   */
  detail?: ExplanationOfBenefitAddItemDetail[] | undefined;
  /**
   * The sequence number of the details within the claim item which this line is intended to replace.
   */
  detailSequence?: number[] | undefined;
  /**
   * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
   */
  factor?: number | undefined;
  /**
   * Claim items which this service line is intended to replace.
   */
  itemSequence?: number[] | undefined;
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
   * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
   */
  productOrService: CodeableConcept;
  /**
   * For example: Neonatal program, child dental program or drug users recovery program.
   */
  programCode?: CodeableConcept[] | undefined;
  /**
   * The providers who are authorized for the services rendered to the patient.
   */
  provider?: Reference[] | undefined;
  /**
   * The number of repetitions of a service or product.
   */
  quantity?: Quantity | undefined;
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
   * The sequence number of the sub-details woithin the details within the claim item which this line is intended to replace.
   */
  subDetailSequence?: number[] | undefined;
  /**
   * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
   */
  subSite?: CodeableConcept[] | undefined;
  /**
   * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
   */
  unitPrice?: Money | undefined;

}