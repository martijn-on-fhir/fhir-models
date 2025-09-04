import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { MeasureGroup } from './MeasureGroup';
import { MeasureSupplementalData } from './MeasureSupplementalData';
import { Period } from './Period';
import { Reference } from './Reference';
import { RelatedArtifact } from './RelatedArtifact';
import { UsageContext } from './UsageContext';

/**
 * The Measure resource provides the definition of a quality measure.
 */
export interface Measure extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Measure';
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
   * Provides a summary of relevant clinical guidelines or other clinical recommendations supporting the measure.
   */
  clinicalRecommendationStatement?: string | undefined;
  _clinicalRecommendationStatement?: Element | undefined;
  /**
   * If this is a composite measure, the scoring method used to combine the component measures to determine the composite score.
   */
  compositeScoring?: CodeableConcept | undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: ContactDetail[] | undefined;
  /**
   * A copyright statement relating to the measure and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the measure.
   */
  copyright?: string | undefined;
  _copyright?: Element | undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the measure. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * Provides a description of an individual term used within the measure.
   */
  definition?: string[] | undefined;
  _definition?: Element[] | undefined;
  /**
   * This description can be used to capture details such as why the measure was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the measure as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the measure is presumed to be the predominant language in the place the measure was created).
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Notices and disclaimers regarding the use of the measure or related to intellectual property (such as code systems) referenced by the measure.
   */
  disclaimer?: string | undefined;
  _disclaimer?: Element | undefined;
  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  editor?: ContactDetail[] | undefined;
  /**
   * The effective period for a measure  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: Period | undefined;
  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  endorser?: ContactDetail[] | undefined;
  /**
   * Allows filtering of measures that are appropriate for use versus not.
   */
  experimental?: boolean | undefined;
  _experimental?: Element | undefined;
  /**
   * A group of population criteria for the measure.
   */
  group?: MeasureGroup[] | undefined;
  /**
   * Additional guidance for the measure including how it can be used in a clinical context, and the intent of the measure.
   */
  guidance?: string | undefined;
  _guidance?: Element | undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this measure outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Information on whether an increase or decrease in score is the preferred result (e.g., a higher score indicates better quality OR a lower score indicates better quality OR quality is within a range).
   */
  improvementNotation?: CodeableConcept | undefined;
  /**
   * It may be possible for the measure to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: CodeableConcept[] | undefined;
  /**
   * If specified, this date follows the original approval date.
   */
  lastReviewDate?: string | undefined;
  _lastReviewDate?: Element | undefined;
  /**
   * A reference to a Library resource containing the formal logic used by the measure.
   */
  library?: string[] | undefined;
  _library?: Element[] | undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the measure is the organization or individual primarily responsible for the maintenance and upkeep of the measure. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the measure. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string | undefined;
  _publisher?: Element | undefined;
  /**
   * This element does not describe the usage of the measure. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this measure.
   */
  purpose?: string | undefined;
  _purpose?: Element | undefined;
  /**
   * The measure rate for an organization or clinician is based upon the entities’ aggregate data and summarizes the performance of the entity over a given time period (e.g., monthly, quarterly, yearly). The aggregated data are derived from the results of a specific measure algorithm and, if appropriate, the application of specific risk adjustment models.  Can also be used to describe how to risk adjust the data based on supplemental data elements described in the eMeasure (e.g., pneumonia hospital measures antibiotic selection in the ICU versus non-ICU and then the roll-up of the two). This could be applied to aggregated cohort measure definitions (e.g., CDC's aggregate reporting for TB at the state level).
   */
  rateAggregation?: string | undefined;
  _rateAggregation?: Element | undefined;
  /**
   * Provides a succinct statement of the need for the measure. Usually includes statements pertaining to importance criterion: impact, gap in care, and evidence.
   */
  rationale?: string | undefined;
  _rationale?: Element | undefined;
  /**
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  relatedArtifact?: RelatedArtifact[] | undefined;
  /**
   * An individual or organization primarily responsible for review of some aspect of the content.
   */
  reviewer?: ContactDetail[] | undefined;
  /**
   * Describes the method of adjusting for clinical severity and conditions present at the start of care that can influence patient outcomes for making valid comparisons of outcome measures across providers. Indicates whether a measure is subject to the statistical process for reducing, removing, or clarifying the influences of confounding factors to allow for more useful comparisons.
   */
  riskAdjustment?: string | undefined;
  _riskAdjustment?: Element | undefined;
  /**
   * Indicates how the calculation is performed for the measure, including proportion, ratio, continuous-variable, and cohort. The value set is extensible, allowing additional measure scoring types to be represented.
   */
  scoring?: CodeableConcept | undefined;
  /**
   * Allows filtering of measures that are appropriate for use versus not.
   */
  status: ('draft'|'active'|'retired'|'unknown');
  _status?: Element | undefined;
  /**
   * The subject of the measure is critical in interpreting the criteria definitions, as the logic in the measures is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  subjectCodeableConcept?: CodeableConcept | undefined;
  /**
   * The subject of the measure is critical in interpreting the criteria definitions, as the logic in the measures is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  subjectReference?: Reference | undefined;
  /**
   * An explanatory or alternate title for the measure giving additional information about its content.
   */
  subtitle?: string | undefined;
  _subtitle?: Element | undefined;
  /**
   * Note that supplemental data are reported as observations for each patient and included in the evaluatedResources bundle. See the MeasureReport resource or the Quality Reporting topic for more information.
   */
  supplementalData?: MeasureSupplementalData[] | undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string | undefined;
  _title?: Element | undefined;
  /**
   * Descriptive topics related to the content of the measure. Topics provide a high-level categorization grouping types of measures that can be useful for filtering and searching.
   */
  topic?: CodeableConcept[] | undefined;
  /**
   * Indicates whether the measure is used to examine a process, an outcome over time, a patient-reported outcome, or a structure measure such as utilization.
   */
  type?: CodeableConcept[] | undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: string | undefined;
  _url?: Element | undefined;
  /**
   * A detailed description, from a clinical perspective, of how the measure is used.
   */
  usage?: string | undefined;
  _usage?: Element | undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: UsageContext[] | undefined;
  /**
   * There may be different measure instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the measure with the format [url]|[version].
   */
  version?: string | undefined;
  _version?: Element | undefined;

}