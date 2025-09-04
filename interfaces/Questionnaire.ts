import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { ContactDetail } from './ContactDetail';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { QuestionnaireItem } from './QuestionnaireItem';
import { UsageContext } from './UsageContext';

/**
 * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 */
export interface Questionnaire extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Questionnaire';
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  approvalDate?: string | undefined;
  _approvalDate?: Element | undefined;
  /**
   * An identifier for this question or group of questions in a particular terminology such as LOINC.
   */
  code?: Coding[] | undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: ContactDetail[] | undefined;
  /**
   * A copyright statement relating to the questionnaire and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the questionnaire.
   */
  copyright?: string | undefined;
  _copyright?: Element | undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the questionnaire. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * The URL of a Questionnaire that this Questionnaire is based on.
   */
  derivedFrom?: string[] | undefined;
  _derivedFrom?: Element[] | undefined;
  /**
   * This description can be used to capture details such as why the questionnaire was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the questionnaire as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the questionnaire is presumed to be the predominant language in the place the questionnaire was created).
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * The effective period for a questionnaire  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: Period | undefined;
  /**
   * Allows filtering of questionnaires that are appropriate for use versus not.
   */
  experimental?: boolean | undefined;
  _experimental?: Element | undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this questionnaire outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The content of the questionnaire is constructed from an ordered, hierarchical collection of items.
   */
  item?: QuestionnaireItem[] | undefined;
  /**
   * It may be possible for the questionnaire to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: CodeableConcept[] | undefined;
  /**
   * If specified, this date follows the original approval date.
   */
  lastReviewDate?: string | undefined;
  _lastReviewDate?: Element | undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the questionnaire is the organization or individual primarily responsible for the maintenance and upkeep of the questionnaire. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the questionnaire. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string | undefined;
  _publisher?: Element | undefined;
  /**
   * This element does not describe the usage of the questionnaire. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this questionnaire.
   */
  purpose?: string | undefined;
  _purpose?: Element | undefined;
  /**
   * Allows filtering of questionnaires that are appropriate for use versus not.
   */
  status: ('draft'|'active'|'retired'|'unknown');
  _status?: Element | undefined;
  /**
   * If none are specified, then the subject is unlimited.
   */
  subjectType?: string[] | undefined;
  _subjectType?: Element[] | undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string | undefined;
  _title?: Element | undefined;
  /**
   * The name of the referenced questionnaire can be conveyed using the http://hl7.org/fhir/StructureDefinition/display extension.
   */
  url?: string | undefined;
  _url?: Element | undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: UsageContext[] | undefined;
  /**
   * There may be different questionnaire instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the questionnaire with the format [url]|[version].
   */
  version?: string | undefined;
  _version?: Element | undefined;

}