import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * Indicates who should participate in performing the action described.
 */
export interface ActivityDefinitionParticipant extends BackboneElement {

  /**
   * The role the participant should play in performing the described action.
   */
  role?: CodeableConcept | undefined;
  /**
   * The type of participant in the action.
   */
  type: ('patient'|'practitioner'|'related-person'|'device');
  _type?: Element | undefined;

}