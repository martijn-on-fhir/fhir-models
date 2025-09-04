import { BackboneElement } from './BackboneElement';
import { ClaimResponseItemAdjudication } from './ClaimResponseItemAdjudication';
import { ClaimResponseItemDetail } from './ClaimResponseItemDetail';

/**
 * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
 */
export interface ClaimResponseItem extends BackboneElement {

  /**
   * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
   */
  adjudication: ClaimResponseItemAdjudication[];
  /**
   * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
   */
  detail?: ClaimResponseItemDetail[] | undefined;
  /**
   * A number to uniquely reference the claim item entries.
   */
  itemSequence: number;
  /**
   * The numbers associated with notes below which apply to the adjudication of this item.
   */
  noteNumber?: number[] | undefined;

}