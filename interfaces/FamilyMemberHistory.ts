import { Age } from './Age';
import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { FamilyMemberHistoryCondition } from './FamilyMemberHistoryCondition';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Range } from './Range';
import { Reference } from './Reference';

/**
 * Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 */
export interface FamilyMemberHistory extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'FamilyMemberHistory';
  /**
   * use estimatedAge to indicate whether the age is actual or not.
   */
  ageAge?: Age | undefined;
  /**
   * use estimatedAge to indicate whether the age is actual or not.
   */
  ageRange?: Range | undefined;
  /**
   * use estimatedAge to indicate whether the age is actual or not.
   */
  ageString?: string | undefined;
  _ageString?: Element | undefined;
  /**
   * The actual or approximate date of birth of the relative.
   */
  bornPeriod?: Period | undefined;
  /**
   * The actual or approximate date of birth of the relative.
   */
  bornDate?: string | undefined;
  _bornDate?: Element | undefined;
  /**
   * The actual or approximate date of birth of the relative.
   */
  bornString?: string | undefined;
  _bornString?: Element | undefined;
  /**
   * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
   */
  condition?: FamilyMemberHistoryCondition[] | undefined;
  /**
   * Describes why the family member's history is not available.
   */
  dataAbsentReason?: CodeableConcept | undefined;
  /**
   * This should be captured even if the same as the date on the List aggregating the full family history.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedBoolean?: boolean | undefined;
  _deceasedBoolean?: Element | undefined;
  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedAge?: Age | undefined;
  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedRange?: Range | undefined;
  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedDate?: string | undefined;
  _deceasedDate?: Element | undefined;
  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedString?: string | undefined;
  _deceasedString?: Element | undefined;
  /**
   * This element is labeled as a modifier because the fact that age is estimated can/should change the results of any algorithm that calculates based on the specified age.
   */
  estimatedAge?: boolean | undefined;
  _estimatedAge?: Element | undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.
   */
  instantiatesCanonical?: string[] | undefined;
  _instantiatesCanonical?: Element[] | undefined;
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: string[] | undefined;
  _instantiatesUri?: Element[] | undefined;
  /**
   * This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair".
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
   */
  note?: Annotation[] | undefined;
  /**
   * The person who this history concerns.
   */
  patient: Reference;
  /**
   * Textual reasons can be captured using reasonCode.text.
   */
  reasonCode?: CodeableConcept[] | undefined;
  /**
   * Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.
   */
  reasonReference?: Reference[] | undefined;
  /**
   * The type of relationship this person has to the patient (father, mother, brother etc.).
   */
  relationship: CodeableConcept;
  /**
   * This element should ideally reflect whether the individual is genetically male or female.  However, as reported information based on the knowledge of the patient or reporting friend/relative, there may be situations where the reported sex might not be totally accurate.  E.g. 'Aunt Sue' might be XY rather than XX.  Questions soliciting this information should be phrased to encourage capture of genetic sex where known.  However, systems performing analysis should also allow for the possibility of imprecision with this element.
   */
  sex?: CodeableConcept | undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ('partial'|'completed'|'entered-in-error'|'health-unknown');
  _status?: Element | undefined;

}