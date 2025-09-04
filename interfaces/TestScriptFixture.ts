import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
 */
export interface TestScriptFixture extends BackboneElement {

  /**
   * Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section.
   */
  autocreate: boolean;
  _autocreate?: Element | undefined;
  /**
   * Whether or not to implicitly delete the fixture during teardown. If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section.
   */
  autodelete: boolean;
  _autodelete?: Element | undefined;
  /**
   * See http://build.fhir.org/resourcelist.html for complete list of resource types.
   */
  resource?: Reference | undefined;

}