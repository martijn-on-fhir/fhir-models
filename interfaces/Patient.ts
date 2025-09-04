import { Address } from './Address';
import { Attachment } from './Attachment';
import { CodeableConcept } from './CodeableConcept';
import { ContactPoint } from './ContactPoint';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { HumanName } from './HumanName';
import { Identifier } from './Identifier';
import { PatientCommunication } from './PatientCommunication';
import { PatientContact } from './PatientContact';
import { PatientLink } from './PatientLink';
import { Reference } from './Reference';

/**
 * Demographics and other administrative information about an individual or animal receiving care or other health-related services.
 */
export interface Patient extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Patient';
  /**
   * If a record is inactive, and linked to an active record, then future patient/record updates should occur on the other patient.
   */
  active?: boolean | undefined;
  _active?: Element | undefined;
  /**
   * Patient may have multiple addresses with different uses or applicable periods.
   */
  address?: Address[] | undefined;
  /**
   * At least an estimated year should be provided as a guess if the real DOB is unknown  There is a standard extension "patient-birthTime" available that should be used where Time is required (such as in maternity/infant care systems).
   */
  birthDate?: string | undefined;
  _birthDate?: Element | undefined;
  /**
   * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple Patient.Communication associations.   For animals, language is not a relevant field, and should be absent from the instance. If the Patient does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
   */
  communication?: PatientCommunication[] | undefined;
  /**
   * Contact covers all kinds of contact parties: family members, business contacts, guardians, caregivers. Not applicable to register pedigree and family ties beyond use of having contact.
   */
  contact?: PatientContact[] | undefined;
  /**
   * If there's no value in the instance, it means there is no statement on whether or not the individual is deceased. Most systems will interpret the absence of a value as a sign of the person being alive.
   */
  deceasedBoolean?: boolean | undefined;
  _deceasedBoolean?: Element | undefined;
  /**
   * If there's no value in the instance, it means there is no statement on whether or not the individual is deceased. Most systems will interpret the absence of a value as a sign of the person being alive.
   */
  deceasedDateTime?: string | undefined;
  _deceasedDateTime?: Element | undefined;
  /**
   * The gender might not match the biological sex as determined by genetics or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than male and female, though the vast majority of systems and contexts only support male and female.  Systems providing decision support or enforcing business rules should ideally do this on the basis of Observations dealing with the specific sex or gender aspect of interest (anatomical, chromosomal, social, etc.)  However, because these observations are infrequently recorded, defaulting to the administrative gender is common practice.  Where such defaulting occurs, rule enforcement should allow for the variation between administrative and biological, chromosomal and other gender aspects.  For example, an alert about a hysterectomy on a male should be handled as a warning or overridable error, not a "hard" error.  See the Patient Gender and Sex section for additional information about communicating patient gender and sex.
   */
  gender?: ('male'|'female'|'other'|'unknown') | undefined;
  _gender?: Element | undefined;
  /**
   * This may be the primary care provider (in a GP context), or it may be a patient nominated care manager in a community/disability setting, or even organization that will provide people to perform the care provider roles.  It is not to be used to record Care Teams, these should be in a CareTeam resource that may be linked to the CarePlan or EpisodeOfCare resources.
   * Multiple GPs may be recorded against the patient for various reasons, such as a student that has his home GP listed along with the GP at university during the school semesters, or a "fly-in/fly-out" worker that has the onsite GP also included with his home GP to remain aware of medical issues.
   * Jurisdictions may decide that they can profile this down to 1 if desired, or 1 per type.
   */
  generalPractitioner?: Reference[] | undefined;
  /**
   * An identifier for this patient.
   */
  identifier?: Identifier[] | undefined;
  /**
   * There is no assumption that linked patient records have mutual links.
   */
  link?: PatientLink[] | undefined;
  /**
   * There is only one managing organization for a specific patient record. Other organizations will have their own Patient record, and may use the Link property to join the records together (or a Person resource which can include confidence ratings for the association).
   */
  managingOrganization?: Reference | undefined;
  /**
   * This field contains a patient's most recent marital (civil) status.
   */
  maritalStatus?: CodeableConcept | undefined;
  /**
   * Where the valueInteger is provided, the number is the birth number in the sequence. E.g. The middle birth in triplets would be valueInteger=2 and the third born would have valueInteger=3 If a boolean value was provided for this triplets example, then all 3 patient records would have valueBoolean=true (the ordering is not indicated).
   */
  multipleBirthBoolean?: boolean | undefined;
  _multipleBirthBoolean?: Element | undefined;
  /**
   * Where the valueInteger is provided, the number is the birth number in the sequence. E.g. The middle birth in triplets would be valueInteger=2 and the third born would have valueInteger=3 If a boolean value was provided for this triplets example, then all 3 patient records would have valueBoolean=true (the ordering is not indicated).
   */
  multipleBirthInteger?: number | undefined;
  /**
   * A patient may have multiple names with different uses or applicable periods. For animals, the name is a "HumanName" in the sense that is assigned and used by humans and has the same patterns.
   */
  name?: HumanName[] | undefined;
  /**
   * Guidelines:
   * * Use id photos, not clinical photos.
   * * Limit dimensions to thumbnail.
   * * Keep byte count low to ease resource updates.
   */
  photo?: Attachment[] | undefined;
  /**
   * A Patient may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification. The address might not go directly to the individual, but may reach another party that is able to proxy for the patient (i.e. home phone, or pet owner's phone).
   */
  telecom?: ContactPoint[] | undefined;

}