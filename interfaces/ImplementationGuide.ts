import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { ImplementationGuideDefinition } from './ImplementationGuideDefinition';
import { ImplementationGuideDependsOn } from './ImplementationGuideDependsOn';
import { ImplementationGuideGlobal } from './ImplementationGuideGlobal';
import { ImplementationGuideManifest } from './ImplementationGuideManifest';
import { UsageContext } from './UsageContext';

/**
 * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 */
export interface ImplementationGuide extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'ImplementationGuide';
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: ContactDetail[] | undefined;
  /**
   * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.
   */
  copyright?: string | undefined;
  _copyright?: Element | undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the implementation guide. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
   */
  definition?: ImplementationGuideDefinition | undefined;
  /**
   * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
   */
  dependsOn?: ImplementationGuideDependsOn[] | undefined;
  /**
   * This description can be used to capture details such as why the implementation guide was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the implementation guide as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the implementation guide is presumed to be the predominant language in the place the implementation guide was created).
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Allows filtering of implementation guides that are appropriate for use versus not.
   */
  experimental?: boolean | undefined;
  _experimental?: Element | undefined;
  /**
   * Most implementation guides target a single version - e.g. they describe how to use a particular version, and the profiles and examples etc are valid for that version. But some implementation guides describe how to use multiple different versions of FHIR to solve the same problem, or in concert with each other. Typically, the requirement to support multiple versions arises as implementation matures and different implementation communities are stuck at different versions by regulation or market dynamics.
   */
  fhirVersion: string[];
  _fhirVersion?: Element[] | undefined;
  /**
   * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
   */
  global?: ImplementationGuideGlobal[] | undefined;
  /**
   * It may be possible for the implementation guide to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: CodeableConcept[] | undefined;
  /**
   * The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'.
   */
  license?: string | undefined;
  _license?: Element | undefined;
  /**
   * Information about an assembled implementation guide, created by the publication tooling.
   */
  manifest?: ImplementationGuideManifest | undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * Many (if not all) IG publishing tools will require that this element be present. For implementation guides published through HL7 or the FHIR foundation, the FHIR product director assigns package IDs.
   */
  packageId: string;
  _packageId?: Element | undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the implementation guide is the organization or individual primarily responsible for the maintenance and upkeep of the implementation guide. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the implementation guide. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string | undefined;
  _publisher?: Element | undefined;
  /**
   * Allows filtering of implementation guides that are appropriate for use versus not.
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
   * There may be different implementation guide instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the implementation guide with the format [url]|[version].
   */
  version?: string | undefined;
  _version?: Element | undefined;

}