import { Address } from './Address';
import { Attachment } from './Attachment';
import { ContactPoint } from './ContactPoint';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { HumanName } from './HumanName';
import { Identifier } from './Identifier';
import { PersonLink } from './PersonLink';
import { Reference } from './Reference';

/**
 * Demographics and administrative information about a person independent of a specific health-related context.
 */
export interface Person extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Person';
  /**
   * Whether this person's record is in active use.
   */
  active?: boolean | undefined;
  _active?: Element | undefined;
  /**
   * Person may have multiple addresses with different uses or applicable periods.
   */
  address?: Address[] | undefined;
  /**
   * At least an estimated year should be provided as a guess if the real DOB is unknown.
   */
  birthDate?: string | undefined;
  _birthDate?: Element | undefined;
  /**
   * The gender might not match the biological sex as determined by genetics, or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than M and F, though a clear majority of systems and contexts only support M and F.
   */
  gender?: ('male'|'female'|'other'|'unknown') | undefined;
  _gender?: Element | undefined;
  /**
   * Identifier for a person within a particular scope.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Link to a resource that concerns the same actual person.
   */
  link?: PersonLink[] | undefined;
  /**
   * The organization that is the custodian of the person record.
   */
  managingOrganization?: Reference | undefined;
  /**
   * Person may have multiple names with different uses or applicable periods.
   */
  name?: HumanName[] | undefined;
  /**
   * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
   */
  photo?: Attachment | undefined;
  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification.
   */
  telecom?: ContactPoint[] | undefined;

}