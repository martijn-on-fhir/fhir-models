import { Address } from './Address';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { ContactPoint } from './ContactPoint';
import { Element } from './Element';
import { HumanName } from './HumanName';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * Contact covers all kinds of contact parties: family members, business contacts, guardians, caregivers. Not applicable to register pedigree and family ties beyond use of having contact.
 */
export interface PatientContact extends BackboneElement {

  /**
   * Address for the contact person.
   */
  address?: Address | undefined;
  /**
   * Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.
   */
  gender?: ('male'|'female'|'other'|'unknown') | undefined;
  _gender?: Element | undefined;
  /**
   * A name associated with the contact person.
   */
  name?: HumanName | undefined;
  /**
   * Organization on behalf of which the contact is acting or for which the contact is working.
   */
  organization?: Reference | undefined;
  /**
   * The period during which this contact person or organization is valid to be contacted relating to this patient.
   */
  period?: Period | undefined;
  /**
   * The nature of the relationship between the patient and the contact person.
   */
  relationship?: CodeableConcept[] | undefined;
  /**
   * Contact may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
   */
  telecom?: ContactPoint[] | undefined;

}