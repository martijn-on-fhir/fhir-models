import { Address } from './Address';
import { Attachment } from './Attachment';
import { CodeableConcept } from './CodeableConcept';
import { ContactPoint } from './ContactPoint';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { HumanName } from './HumanName';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';
import { RelatedPersonCommunication } from './RelatedPersonCommunication';

/**
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 */
export interface RelatedPerson extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'RelatedPerson';
  /**
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  active?: boolean | undefined;
  _active?: Element | undefined;
  /**
   * Address where the related person can be contacted or visited.
   */
  address?: Address[] | undefined;
  /**
   * The date on which the related person was born.
   */
  birthDate?: string | undefined;
  _birthDate?: Element | undefined;
  /**
   * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
   */
  communication?: RelatedPersonCommunication[] | undefined;
  /**
   * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   */
  gender?: ('male'|'female'|'other'|'unknown') | undefined;
  _gender?: Element | undefined;
  /**
   * Identifier for a person within a particular scope.
   */
  identifier?: Identifier[] | undefined;
  /**
   * A name associated with the person.
   */
  name?: HumanName[] | undefined;
  /**
   * The patient this person is related to.
   */
  patient: Reference;
  /**
   * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
   */
  period?: Period | undefined;
  /**
   * Image of the person.
   */
  photo?: Attachment[] | undefined;
  /**
   * The nature of the relationship between a patient and the related person.
   */
  relationship?: CodeableConcept[] | undefined;
  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
   */
  telecom?: ContactPoint[] | undefined;

}