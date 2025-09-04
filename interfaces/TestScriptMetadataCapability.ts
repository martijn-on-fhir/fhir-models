import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * When the metadata capabilities section is defined at TestScript.metadata or at TestScript.setup.metadata, and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then all the tests in the TestScript are skipped.  When the metadata capabilities section is defined at TestScript.test.metadata and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then only that test is skipped.  The "metadata.capabilities.required" and "metadata.capabilities.validated" elements only indicate whether the capabilities are the primary focus of the test script or not.  They do not impact the skipping logic.  Capabilities whose "metadata.capabilities.validated" flag is true are the primary focus of the test script.
 */
export interface TestScriptMetadataCapability extends BackboneElement {

  /**
   * The conformance statement of the server has to contain at a minimum the contents of the reference pointed to by this element.
   */
  capabilities: string;
  _capabilities?: Element | undefined;
  /**
   * Description of the capabilities that this test script is requiring the server to support.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Which server these requirements apply to.
   */
  destination?: number | undefined;
  /**
   * Links to the FHIR specification that describes this interaction and the resources involved in more detail.
   */
  link?: string[] | undefined;
  _link?: Element[] | undefined;
  /**
   * Which origin server these requirements apply to.
   */
  origin?: number[] | undefined;
  /**
   * Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.
   */
  required: boolean;
  _required?: Element | undefined;
  /**
   * Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.
   */
  validated: boolean;
  _validated?: Element | undefined;

}