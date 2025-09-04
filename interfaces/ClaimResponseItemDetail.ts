import { BackboneElement } from './BackboneElement';
import { ClaimResponseItemAdjudication } from './ClaimResponseItemAdjudication';
import { ClaimResponseItemDetailSubDetail } from './ClaimResponseItemDetailSubDetail';

/**
 * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export interface ClaimResponseItemDetail extends BackboneElement {

  /**
   * The adjudication results.
   */
  adjudication: ClaimResponseItemAdjudication[];
  /**
   * A number to uniquely reference the claim detail entry.
   */
  detailSequence: number;
  /**
   * The numbers associated with notes below which apply to the adjudication of this item.
   */
  noteNumber?: number[] | undefined;
  /**
   * A sub-detail adjudication of a simple product or service.
   */
  subDetail?: ClaimResponseItemDetailSubDetail[] | undefined;

}