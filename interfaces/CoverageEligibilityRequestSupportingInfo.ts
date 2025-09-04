import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export interface CoverageEligibilityRequestSupportingInfo extends BackboneElement {

  /**
   * The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.
   */
  appliesToAll?: boolean | undefined;
  _appliesToAll?: Element | undefined;
  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  information: Reference;
  /**
   * A number to uniquely identify supporting information entries.
   */
  sequence: number;

}