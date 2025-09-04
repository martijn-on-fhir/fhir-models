import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';
import { RelatedArtifact } from './RelatedArtifact';
import { RiskEvidenceSynthesisCertainty } from './RiskEvidenceSynthesisCertainty';
import { RiskEvidenceSynthesisRiskEstimate } from './RiskEvidenceSynthesisRiskEstimate';
import { RiskEvidenceSynthesisSampleSize } from './RiskEvidenceSynthesisSampleSize';
import { UsageContext } from './UsageContext';

/**
 * The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.
 */
export interface RiskEvidenceSynthesis extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'RiskEvidenceSynthesis';
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
   * A description of the certainty of the risk estimate.
   */
  certainty?: RiskEvidenceSynthesisCertainty[] | undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: ContactDetail[] | undefined;
  /**
   * A copyright statement relating to the risk evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the risk evidence synthesis.
   */
  copyright?: string | undefined;
  _copyright?: Element | undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the risk evidence synthesis. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * This description can be used to capture details such as why the risk evidence synthesis was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the risk evidence synthesis as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the risk evidence synthesis is presumed to be the predominant language in the place the risk evidence synthesis was created).
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  editor?: ContactDetail[] | undefined;
  /**
   * The effective period for a risk evidence synthesis  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: Period | undefined;
  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  endorser?: ContactDetail[] | undefined;
  /**
   * A reference to a EvidenceVariable resource that defines the exposure for the research.
   */
  exposure?: Reference | undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this risk evidence synthesis outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: Identifier[] | undefined;
  /**
   * It may be possible for the risk evidence synthesis to be used in jurisdictions other than those for which it was originally designed or intended.
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
   * A human-readable string to clarify or explain concepts about the resource.
   */
  note?: Annotation[] | undefined;
  /**
   * A reference to a EvidenceVariable resomece that defines the outcome for the research.
   */
  outcome: Reference;
  /**
   * A reference to a EvidenceVariable resource that defines the population for the research.
   */
  population: Reference;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the risk evidence synthesis is the organization or individual primarily responsible for the maintenance and upkeep of the risk evidence synthesis. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the risk evidence synthesis. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string | undefined;
  _publisher?: Element | undefined;
  /**
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  relatedArtifact?: RelatedArtifact[] | undefined;
  /**
   * An individual or organization primarily responsible for review of some aspect of the content.
   */
  reviewer?: ContactDetail[] | undefined;
  /**
   * The estimated risk of the outcome.
   */
  riskEstimate?: RiskEvidenceSynthesisRiskEstimate | undefined;
  /**
   * A description of the size of the sample involved in the synthesis.
   */
  sampleSize?: RiskEvidenceSynthesisSampleSize | undefined;
  /**
   * Allows filtering of risk evidence synthesiss that are appropriate for use versus not.
   */
  status: ('draft'|'active'|'retired'|'unknown');
  _status?: Element | undefined;
  /**
   * Type of study eg randomized trial.
   */
  studyType?: CodeableConcept | undefined;
  /**
   * Type of synthesis eg meta-analysis.
   */
  synthesisType?: CodeableConcept | undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string | undefined;
  _title?: Element | undefined;
  /**
   * Descriptive topics related to the content of the RiskEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.
   */
  topic?: CodeableConcept[] | undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: string | undefined;
  _url?: Element | undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: UsageContext[] | undefined;
  /**
   * There may be different risk evidence synthesis instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the risk evidence synthesis with the format [url]|[version].
   */
  version?: string | undefined;
  _version?: Element | undefined;

}