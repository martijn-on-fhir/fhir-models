import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
 */
export interface ConsentVerification extends BackboneElement {

  /**
   * Date verification was collected.
   */
  verificationDate?: string | undefined;
  _verificationDate?: Element | undefined;
  /**
   * Has the instruction been verified.
   */
  verified: boolean;
  _verified?: Element | undefined;
  /**
   * Who verified the instruction (Patient, Relative or other Authorized Person).
   */
  verifiedWith?: Reference | undefined;

}