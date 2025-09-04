import { ActivityDefinitionDynamicValue } from './ActivityDefinitionDynamicValue';
import { ActivityDefinitionParticipant } from './ActivityDefinitionParticipant';
import { Age } from './Age';
import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { DomainResource } from './DomainResource';
import { Dosage } from './Dosage';
import { Duration } from './Duration';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Reference } from './Reference';
import { RelatedArtifact } from './RelatedArtifact';
import { Timing } from './Timing';
import { UsageContext } from './UsageContext';

/**
 * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 */
export interface ActivityDefinition extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'ActivityDefinition';
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
   * Only used if not implicit in the code found in ServiceRequest.type.
   */
  bodySite?: CodeableConcept[] | undefined;
  /**
   * Tends to be less relevant for activities involving particular products.
   */
  code?: CodeableConcept | undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: ContactDetail[] | undefined;
  /**
   * A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.
   */
  copyright?: string | undefined;
  _copyright?: Element | undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the activity definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * This description can be used to capture details such as why the activity definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the activity definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the activity definition is presumed to be the predominant language in the place the activity definition was created).
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * This element is not intended to be used to communicate a decision support response to cancel an order in progress. That should be done with the "remove" type of a PlanDefinition or RequestGroup.
   */
  doNotPerform?: boolean | undefined;
  _doNotPerform?: Element | undefined;
  /**
   * If a dosage instruction is used, the definition should not specify timing or quantity.
   */
  dosage?: Dosage[] | undefined;
  /**
   * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
   */
  dynamicValue?: ActivityDefinitionDynamicValue[] | undefined;
  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  editor?: ContactDetail[] | undefined;
  /**
   * The effective period for a activity definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: Period | undefined;
  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  endorser?: ContactDetail[] | undefined;
  /**
   * Allows filtering of activity definitions that are appropriate for use versus not.
   */
  experimental?: boolean | undefined;
  _experimental?: Element | undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this activity definition outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Indicates the level of authority/intentionality associated with the activity and where the request should fit into the workflow chain.
   */
  intent?: ('proposal'|'plan'|'directive'|'order'|'original-order'|'reflex-order'|'filler-order'|'instance-order'|'option') | undefined;
  _intent?: Element | undefined;
  /**
   * It may be possible for the activity definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: CodeableConcept[] | undefined;
  /**
   * May determine what types of extensions are permitted.
   */
  kind?: string | undefined;
  _kind?: Element | undefined;
  /**
   * If specified, this date follows the original approval date.
   */
  lastReviewDate?: string | undefined;
  _lastReviewDate?: Element | undefined;
  /**
   * A reference to a Library resource containing any formal logic used by the activity definition.
   */
  library?: string[] | undefined;
  _library?: Element[] | undefined;
  /**
   * May reference a specific clinical location or may just identify a type of location.
   */
  location?: Reference | undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * Defines observation requirements for the action to be performed, such as body weight or surface area.
   */
  observationRequirement?: Reference[] | undefined;
  /**
   * Defines the observations that are expected to be produced by the action.
   */
  observationResultRequirement?: Reference[] | undefined;
  /**
   * Indicates who should participate in performing the action described.
   */
  participant?: ActivityDefinitionParticipant[] | undefined;
  /**
   * Indicates how quickly the activity  should be addressed with respect to other requests.
   */
  priority?: ('routine'|'urgent'|'asap'|'stat') | undefined;
  _priority?: Element | undefined;
  /**
   * Identifies the food, drug or other product being consumed or supplied in the activity.
   */
  productReference?: Reference | undefined;
  /**
   * Identifies the food, drug or other product being consumed or supplied in the activity.
   */
  productCodeableConcept?: CodeableConcept | undefined;
  /**
   * A profile to which the target of the activity definition is expected to conform.
   */
  profile?: string | undefined;
  _profile?: Element | undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the activity definition is the organization or individual primarily responsible for the maintenance and upkeep of the activity definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the activity definition. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string | undefined;
  _publisher?: Element | undefined;
  /**
   * This element does not describe the usage of the activity definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this activity definition.
   */
  purpose?: string | undefined;
  _purpose?: Element | undefined;
  /**
   * Identifies the quantity expected to be consumed at once (per dose, per meal, etc.).
   */
  quantity?: Quantity | undefined;
  /**
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  relatedArtifact?: RelatedArtifact[] | undefined;
  /**
   * An individual or organization primarily responsible for review of some aspect of the content.
   */
  reviewer?: ContactDetail[] | undefined;
  /**
   * Defines specimen requirements for the action to be performed, such as required specimens for a lab test.
   */
  specimenRequirement?: Reference[] | undefined;
  /**
   * Allows filtering of activity definitions that are appropriate for use versus not.
   */
  status: ('draft'|'active'|'retired'|'unknown');
  _status?: Element | undefined;
  /**
   * A code or group definition that describes the intended subject of the activity being defined.
   */
  subjectCodeableConcept?: CodeableConcept | undefined;
  /**
   * A code or group definition that describes the intended subject of the activity being defined.
   */
  subjectReference?: Reference | undefined;
  /**
   * An explanatory or alternate title for the activity definition giving additional information about its content.
   */
  subtitle?: string | undefined;
  _subtitle?: Element | undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  timingTiming?: Timing | undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  timingDateTime?: string | undefined;
  _timingDateTime?: Element | undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  timingAge?: Age | undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  timingPeriod?: Period | undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  timingRange?: Range | undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  timingDuration?: Duration | undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string | undefined;
  _title?: Element | undefined;
  /**
   * Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.
   */
  topic?: CodeableConcept[] | undefined;
  /**
   * Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
   */
  transform?: string | undefined;
  _transform?: Element | undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: string | undefined;
  _url?: Element | undefined;
  /**
   * A detailed description of how the activity definition is used from a clinical perspective.
   */
  usage?: string | undefined;
  _usage?: Element | undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: UsageContext[] | undefined;
  /**
   * There may be different activity definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the activity definition with the format [url]|[version].
   */
  version?: string | undefined;
  _version?: Element | undefined;

}