import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * The members of the team who provided the products and services.
 */
export interface ClaimCareTeam extends BackboneElement {

  /**
   * Member of the team who provided the product or service.
   */
  provider: Reference;
  /**
   * The qualification of the practitioner which is applicable for this service.
   */
  qualification?: CodeableConcept | undefined;
  /**
   * Responsible might not be required when there is only a single provider listed.
   */
  responsible?: boolean | undefined;
  _responsible?: Element | undefined;
  /**
   * Role might not be required when there is only a single provider listed.
   */
  role?: CodeableConcept | undefined;
  /**
   * A number to uniquely identify care team entries.
   */
  sequence: number;

}