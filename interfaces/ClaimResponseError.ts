import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';

/**
 * If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
 */
export interface ClaimResponseError extends BackboneElement {

  /**
   * An error code, from a specified code system, which details why the claim could not be adjudicated.
   */
  code: CodeableConcept;
  /**
   * The sequence number of the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
   */
  detailSequence?: number | undefined;
  /**
   * The sequence number of the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
   */
  itemSequence?: number | undefined;
  /**
   * The sequence number of the sub-detail within the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
   */
  subDetailSequence?: number | undefined;

}