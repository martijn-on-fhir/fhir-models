import { BackboneElement } from './BackboneElement';
import { Coding } from './Coding';

/**
 * The purpose of this element is to define the profile of an origin element used elsewhere in the script.  Test engines could then use the origin-profile mapping to offer a filtered list of test systems that can serve as the sender for the interaction.
 */
export interface TestScriptOrigin extends BackboneElement {

  /**
   * A given origin index (e.g. 1) can appear only once in the list (e.g. Origin 1 cannot be specified twice ... once as FormFiller and again as FormProcessor within the same script as that could get confusing during test configuration).
   * Different origin indices could play the same actor in the same test script (e.g. You could have two different test systems acting as Form-Filler).
   * The origin indices provided elsewhere in the test script must be one of these origin indices.
   */
  index: number;
  /**
   * Must be a "sender"/"client" profile.
   */
  profile: Coding;

}