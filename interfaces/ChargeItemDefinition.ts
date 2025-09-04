import { ChargeItemDefinitionApplicability } from './ChargeItemDefinitionApplicability';
import { ChargeItemDefinitionPropertyGroup } from './ChargeItemDefinitionPropertyGroup';
import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';
import { UsageContext } from './UsageContext';

/**
 * The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.
 */
export interface ChargeItemDefinition extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'ChargeItemDefinition';
  /**
   * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
   */
  applicability?: ChargeItemDefinitionApplicability[] | undefined;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  approvalDate?: string | undefined;
  _approvalDate?: Element | undefined;
  /**
   * The defined billing details in this resource pertain to the given billing code.
   */
  code?: CodeableConcept | undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: ContactDetail[] | undefined;
  /**
   * A copyright statement relating to the charge item definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the charge item definition.
   */
  copyright?: string | undefined;
  _copyright?: Element | undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the charge item definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * The URL pointing to an externally-defined charge item definition that is adhered to in whole or in part by this definition.
   */
  derivedFromUri?: string[] | undefined;
  _derivedFromUri?: Element[] | undefined;
  /**
   * This description can be used to capture details such as why the charge item definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the charge item definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the charge item definition is presumed to be the predominant language in the place the charge item definition was created).
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * The effective period for a charge item definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: Period | undefined;
  /**
   * Allows filtering of charge item definitions that are appropriate for use versus not.
   */
  experimental?: boolean | undefined;
  _experimental?: Element | undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this charge item definition outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: Identifier[] | undefined;
  /**
   * In case of highly customized, individually produced or fitted devices/substances, the pricing information may be different for each instance of the product. This reference links pricing details to specific product instances.
   */
  instance?: Reference[] | undefined;
  /**
   * It may be possible for the charge item definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: CodeableConcept[] | undefined;
  /**
   * If specified, this date follows the original approval date.
   */
  lastReviewDate?: string | undefined;
  _lastReviewDate?: Element | undefined;
  /**
   * A larger definition of which this particular definition is a component or step.
   */
  partOf?: string[] | undefined;
  _partOf?: Element[] | undefined;
  /**
   * Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply.
   */
  propertyGroup?: ChargeItemDefinitionPropertyGroup[] | undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the charge item definition is the organization or individual primarily responsible for the maintenance and upkeep of the charge item definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the charge item definition. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string | undefined;
  _publisher?: Element | undefined;
  /**
   * As new versions of a protocol or guideline are defined, allows identification of what versions are replaced by a new instance.
   */
  replaces?: string[] | undefined;
  _replaces?: Element[] | undefined;
  /**
   * Allows filtering of charge item definitions that are appropriate for use versus not.
   */
  status: ('draft'|'active'|'retired'|'unknown');
  _status?: Element | undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string | undefined;
  _title?: Element | undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url: string;
  _url?: Element | undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: UsageContext[] | undefined;
  /**
   * There may be different charge item definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the charge item definition with the format [url]|[version].
   */
  version?: string | undefined;
  _version?: Element | undefined;

}