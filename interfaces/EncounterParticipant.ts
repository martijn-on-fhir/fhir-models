import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * The list of people responsible for providing the service.
 */
export interface EncounterParticipant extends BackboneElement {

  /**
   * Persons involved in the encounter other than the patient.
   */
  individual?: Reference | undefined;
  /**
   * The period of time that the specified participant participated in the encounter. These can overlap or be sub-sets of the overall encounter's period.
   */
  period?: Period | undefined;
  /**
   * The participant type indicates how an individual participates in an encounter. It includes non-practitioner participants, and for practitioners this is to describe the action type in the context of this encounter (e.g. Admitting Dr, Attending Dr, Translator, Consulting Dr). This is different to the practitioner roles which are functional roles, derived from terms of employment, education, licensing, etc.
   */
  type?: CodeableConcept[] | undefined;

}