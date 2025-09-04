import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * Identifies all people and organizations who are expected to be involved in the care team.
 */
export interface CareTeamParticipant extends BackboneElement {

  /**
   * Patient only needs to be listed if they have a role other than "subject of care".
   * Member is optional because some participants may be known only by their role, particularly in draft plans.
   */
  member?: Reference | undefined;
  /**
   * The organization of the practitioner.
   */
  onBehalfOf?: Reference | undefined;
  /**
   * Indicates when the specific member or organization did (or is intended to) come into effect and end.
   */
  period?: Period | undefined;
  /**
   * Roles may sometimes be inferred by type of Practitioner.  These are relationships that hold only within the context of the care team.  General relationships should be handled as properties of the Patient resource directly.
   */
  role?: CodeableConcept[] | undefined;

}