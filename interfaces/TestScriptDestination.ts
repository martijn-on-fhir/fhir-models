import { BackboneElement } from './BackboneElement';
import { Coding } from './Coding';

/**
 * The purpose of this element is to define the profile of a destination element used elsewhere in the script.  Test engines could then use the destination-profile mapping to offer a filtered list of test systems that can serve as the receiver for the interaction.
 */
export interface TestScriptDestination extends BackboneElement {

  /**
   * A given destination index (e.g. 1) can appear only once in the list (e.g. Destination 1 cannot be specified twice ... once as Form-Manager and again as Form-Processor within the same script as that could get confusing during test configuration).
   * Different destination indices could play the same actor in the same test script (e.g. You could have two different test systems acting as Form-Manager).
   * The destination indices provided elsewhere in the test script must be one of these destination indices.
   */
  index: number;
  /**
   * Must be a "receiver"/"server" profile.
   */
  profile: Coding;

}