import { Address } from './Address';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { ContactPoint } from './ContactPoint';
import { HumanName } from './HumanName';

/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export interface InsurancePlanContact extends BackboneElement {

  /**
   * Visiting or postal addresses for the contact.
   */
  address?: Address | undefined;
  /**
   * A name associated with the contact.
   */
  name?: HumanName | undefined;
  /**
   * Indicates a purpose for which the contact can be reached.
   */
  purpose?: CodeableConcept | undefined;
  /**
   * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
   */
  telecom?: ContactPoint[] | undefined;

}