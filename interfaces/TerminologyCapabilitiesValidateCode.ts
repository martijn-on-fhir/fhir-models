import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation.
 */
export interface TerminologyCapabilitiesValidateCode extends BackboneElement {

  /**
   * Whether translations are validated.
   */
  translations: boolean;
  _translations?: Element | undefined;

}