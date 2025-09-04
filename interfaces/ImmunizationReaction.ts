import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
 */
export interface ImmunizationReaction extends BackboneElement {

  /**
   * Date of reaction to the immunization.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * Details of the reaction.
   */
  detail?: Reference | undefined;
  /**
   * Self-reported indicator.
   */
  reported?: boolean | undefined;
  _reported?: Element | undefined;

}