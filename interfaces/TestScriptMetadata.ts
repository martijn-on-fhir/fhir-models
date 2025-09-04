import { BackboneElement } from './BackboneElement';
import { TestScriptMetadataCapability } from './TestScriptMetadataCapability';
import { TestScriptMetadataLink } from './TestScriptMetadataLink';

/**
 * The required capability must exist and are assumed to function correctly on the FHIR server being tested.
 */
export interface TestScriptMetadata extends BackboneElement {

  /**
   * When the metadata capabilities section is defined at TestScript.metadata or at TestScript.setup.metadata, and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then all the tests in the TestScript are skipped.  When the metadata capabilities section is defined at TestScript.test.metadata and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then only that test is skipped.  The "metadata.capabilities.required" and "metadata.capabilities.validated" elements only indicate whether the capabilities are the primary focus of the test script or not.  They do not impact the skipping logic.  Capabilities whose "metadata.capabilities.validated" flag is true are the primary focus of the test script.
   */
  capability: TestScriptMetadataCapability[];
  /**
   * A link to the FHIR specification that this test is covering.
   */
  link?: TestScriptMetadataLink[] | undefined;

}