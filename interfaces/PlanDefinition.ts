import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { PlanDefinitionAction } from './PlanDefinitionAction';
import { PlanDefinitionGoal } from './PlanDefinitionGoal';
import { Reference } from './Reference';
import { RelatedArtifact } from './RelatedArtifact';
import { UsageContext } from './UsageContext';

/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 */
export interface PlanDefinition extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'PlanDefinition';
  /**
   * Note that there is overlap between many of the elements defined here and the ActivityDefinition resource. When an ActivityDefinition is referenced (using the definition element), the overlapping elements in the plan override the content of the referenced ActivityDefinition unless otherwise documented in the specific elements. See the PlanDefinition resource for more detailed information.
   */
  action?: PlanDefinitionAction[] | undefined;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  approvalDate?: string | undefined;
  _approvalDate?: Element | undefined;
  /**
   * An individiual or organization primarily involved in the creation and maintenance of the content.
   */
  author?: ContactDetail[] | undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: ContactDetail[] | undefined;
  /**
   * A copyright statement relating to the plan definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the plan definition.
   */
  copyright?: string | undefined;
  _copyright?: Element | undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the plan definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * This description can be used to capture details such as why the plan definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the plan definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the plan definition is presumed to be the predominant language in the place the plan definition was created).
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  editor?: ContactDetail[] | undefined;
  /**
   * The effective period for a plan definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: Period | undefined;
  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  endorser?: ContactDetail[] | undefined;
  /**
   * Allows filtering of plan definitions that are appropriate for use versus not.
   */
  experimental?: boolean | undefined;
  _experimental?: Element | undefined;
  /**
   * Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
   */
  goal?: PlanDefinitionGoal[] | undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this plan definition outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: Identifier[] | undefined;
  /**
   * It may be possible for the plan definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: CodeableConcept[] | undefined;
  /**
   * If specified, this date follows the original approval date.
   */
  lastReviewDate?: string | undefined;
  _lastReviewDate?: Element | undefined;
  /**
   * A reference to a Library resource containing any formal logic used by the plan definition.
   */
  library?: string[] | undefined;
  _library?: Element[] | undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the plan definition is the organization or individual primarily responsible for the maintenance and upkeep of the plan definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the plan definition. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string | undefined;
  _publisher?: Element | undefined;
  /**
   * This element does not describe the usage of the plan definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this plan definition.
   */
  purpose?: string | undefined;
  _purpose?: Element | undefined;
  /**
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  relatedArtifact?: RelatedArtifact[] | undefined;
  /**
   * An individual or organization primarily responsible for review of some aspect of the content.
   */
  reviewer?: ContactDetail[] | undefined;
  /**
   * Allows filtering of plan definitions that are appropriate for use versus not.
   */
  status: ('draft'|'active'|'retired'|'unknown');
  _status?: Element | undefined;
  /**
   * A code or group definition that describes the intended subject of the plan definition.
   */
  subjectCodeableConcept?: CodeableConcept | undefined;
  /**
   * A code or group definition that describes the intended subject of the plan definition.
   */
  subjectReference?: Reference | undefined;
  /**
   * An explanatory or alternate title for the plan definition giving additional information about its content.
   */
  subtitle?: string | undefined;
  _subtitle?: Element | undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string | undefined;
  _title?: Element | undefined;
  /**
   * Descriptive topics related to the content of the plan definition. Topics provide a high-level categorization of the definition that can be useful for filtering and searching.
   */
  topic?: CodeableConcept[] | undefined;
  /**
   * A high-level category for the plan definition that distinguishes the kinds of systems that would be interested in the plan definition.
   */
  type?: CodeableConcept | undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: string | undefined;
  _url?: Element | undefined;
  /**
   * A detailed description of how the plan definition is used from a clinical perspective.
   */
  usage?: string | undefined;
  _usage?: Element | undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: UsageContext[] | undefined;
  /**
   * There may be different plan definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the plan definition with the format [url]|[version].
   */
  version?: string | undefined;
  _version?: Element | undefined;

}