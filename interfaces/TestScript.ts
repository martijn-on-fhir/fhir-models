import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';
import { TestScriptDestination } from './TestScriptDestination';
import { TestScriptFixture } from './TestScriptFixture';
import { TestScriptMetadata } from './TestScriptMetadata';
import { TestScriptOrigin } from './TestScriptOrigin';
import { TestScriptSetup } from './TestScriptSetup';
import { TestScriptTeardown } from './TestScriptTeardown';
import { TestScriptTest } from './TestScriptTest';
import { TestScriptVariable } from './TestScriptVariable';
import { UsageContext } from './UsageContext';

/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 */
export interface TestScript extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'TestScript';
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: ContactDetail[] | undefined;
  /**
   * A copyright statement relating to the test script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the test script.
   */
  copyright?: string | undefined;
  _copyright?: Element | undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the test script. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * This description can be used to capture details such as why the test script was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the test script as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the test script is presumed to be the predominant language in the place the test script was created).
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * The purpose of this element is to define the profile of a destination element used elsewhere in the script.  Test engines could then use the destination-profile mapping to offer a filtered list of test systems that can serve as the receiver for the interaction.
   */
  destination?: TestScriptDestination[] | undefined;
  /**
   * Allows filtering of test scripts that are appropriate for use versus not.
   */
  experimental?: boolean | undefined;
  _experimental?: Element | undefined;
  /**
   * Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
   */
  fixture?: TestScriptFixture[] | undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this test script outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: Identifier | undefined;
  /**
   * It may be possible for the test script to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: CodeableConcept[] | undefined;
  /**
   * The required capability must exist and are assumed to function correctly on the FHIR server being tested.
   */
  metadata?: TestScriptMetadata | undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * The purpose of this element is to define the profile of an origin element used elsewhere in the script.  Test engines could then use the origin-profile mapping to offer a filtered list of test systems that can serve as the sender for the interaction.
   */
  origin?: TestScriptOrigin[] | undefined;
  /**
   * See http://build.fhir.org/resourcelist.html for complete list of resource types.
   */
  profile?: Reference[] | undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the test script is the organization or individual primarily responsible for the maintenance and upkeep of the test script. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the test script. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string | undefined;
  _publisher?: Element | undefined;
  /**
   * This element does not describe the usage of the test script. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this test script.
   */
  purpose?: string | undefined;
  _purpose?: Element | undefined;
  /**
   * A series of required setup operations before tests are executed.
   */
  setup?: TestScriptSetup | undefined;
  /**
   * Allows filtering of test scripts that are appropriate for use versus not.
   */
  status: ('draft'|'active'|'retired'|'unknown');
  _status?: Element | undefined;
  /**
   * A series of operations required to clean up after all the tests are executed (successfully or otherwise).
   */
  teardown?: TestScriptTeardown | undefined;
  /**
   * A test in this script.
   */
  test?: TestScriptTest[] | undefined;
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
   * Variables would be set based either on XPath/JSONPath expressions against fixtures (static and response), or headerField evaluations against response headers. If variable evaluates to nodelist or anything other than a primitive value, then test engine would report an error.  Variables would be used to perform clean replacements in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations. This limits the places that test engines would need to look for placeholders "${}".  Variables are scoped to the whole script. They are NOT evaluated at declaration. They are evaluated by test engine when used for substitutions in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations.  See example testscript-search.xml.
   */
  variable?: TestScriptVariable[] | undefined;
  /**
   * There may be different test script instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the test script with the format [url]|[version].
   */
  version?: string | undefined;
  _version?: Element | undefined;

}