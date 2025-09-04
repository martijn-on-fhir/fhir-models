import { BackboneElement } from './BackboneElement';
import { ClaimResponseItemAdjudication } from './ClaimResponseItemAdjudication';

/**
 * A sub-detail adjudication of a simple product or service.
 */
export interface ClaimResponseItemDetailSubDetail extends BackboneElement {

  /**
   * The adjudication results.
   */
  adjudication?: ClaimResponseItemAdjudication[] | undefined;
  /**
   * The numbers associated with notes below which apply to the adjudication of this item.
   */
  noteNumber?: number[] | undefined;
  /**
   * A number to uniquely reference the claim sub-detail entry.
   */
  subDetailSequence: number;

}