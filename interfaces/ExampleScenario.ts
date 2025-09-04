import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { ExampleScenarioActor } from './ExampleScenarioActor';
import { ExampleScenarioInstance } from './ExampleScenarioInstance';
import { ExampleScenarioProcess } from './ExampleScenarioProcess';
import { Identifier } from './Identifier';
import { UsageContext } from './UsageContext';

/**
 * Example of workflow instance.
 */
export interface ExampleScenario extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'ExampleScenario';
  /**
   * Actor participating in the resource.
   */
  actor?: ExampleScenarioActor[] | undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: ContactDetail[] | undefined;
  /**
   * nullFrequently, the copyright differs between the value set and the codes that are included. The copyright statement should clearly differentiate between these when required.
   */
  copyright?: string | undefined;
  _copyright?: Element | undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the example scenario. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * Allows filtering of example scenarios that are appropriate for use versus not.
   */
  experimental?: boolean | undefined;
  _experimental?: Element | undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this example scenario outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Each resource and each version that is present in the workflow.
   */
  instance?: ExampleScenarioInstance[] | undefined;
  /**
   * It may be possible for the example scenario to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: CodeableConcept[] | undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * Each major process - a group of operations.
   */
  process?: ExampleScenarioProcess[] | undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the example scenario is the organization or individual primarily responsible for the maintenance and upkeep of the example scenario. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the example scenario. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string | undefined;
  _publisher?: Element | undefined;
  /**
   * This element does not describe the usage of the example scenario. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this example scenario.
   */
  purpose?: string | undefined;
  _purpose?: Element | undefined;
  /**
   * Allows filtering of example scenarios that are appropriate for use versus not.
   */
  status: ('draft'|'active'|'retired'|'unknown');
  _status?: Element | undefined;
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
   * There may be different example scenario instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the example scenario with the format [url]|[version].
   */
  version?: string | undefined;
  _version?: Element | undefined;
  /**
   * Another nested workflow.
   */
  workflow?: string[] | undefined;
  _workflow?: Element[] | undefined;

}