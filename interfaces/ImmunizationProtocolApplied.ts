import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * The protocol (set of recommendations) being followed by the provider who administered the dose.
 */
export interface ImmunizationProtocolApplied extends BackboneElement {

  /**
   * Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
   */
  authority?: Reference | undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  doseNumberPositiveInt?: number | undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  doseNumberString?: string | undefined;
  _doseNumberString?: Element | undefined;
  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  series?: string | undefined;
  _series?: Element | undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesPositiveInt?: number | undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesString?: string | undefined;
  _seriesDosesString?: Element | undefined;
  /**
   * The vaccine preventable disease the dose is being administered against.
   */
  targetDisease?: CodeableConcept[] | undefined;

}