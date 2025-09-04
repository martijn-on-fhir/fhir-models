import { BackboneElement } from './BackboneElement';
import { ClaimResponseItemAdjudication } from './ClaimResponseItemAdjudication';
import { CodeableConcept } from './CodeableConcept';
import { Money } from './Money';
import { Quantity } from './Quantity';

/**
 * The third-tier service adjudications for payor added services.
 */
export interface ClaimResponseAddItemDetailSubDetail extends BackboneElement {

  /**
   * The adjudication results.
   */
  adjudication: ClaimResponseItemAdjudication[];
  /**
   * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
   */
  factor?: number | undefined;
  /**
   * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
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
   * The number of repetitions of a service or product.
   */
  quantity?: Quantity | undefined;
  /**
   * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
   */
  unitPrice?: Money | undefined;

}