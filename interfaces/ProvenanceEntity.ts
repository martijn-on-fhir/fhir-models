import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { ProvenanceAgent } from './ProvenanceAgent';
import { Reference } from './Reference';

/**
 * An entity used in this activity.
 */
export interface ProvenanceEntity extends BackboneElement {

  /**
   * A usecase where one Provenance.entity.agent is used where the Entity that was used in the creation/updating of the Target, is not in the context of the same custodianship as the Target, and thus the meaning of Provenance.entity.agent is to say that the entity referenced is managed elsewhere and that this Agent provided access to it.  This would be similar to where the Entity being referenced is managed outside FHIR, such as through HL7 v2, v3, or XDS. This might be where the Entity being referenced is managed in another FHIR resource server. Thus it explains the Provenance of that Entity's use in the context of this Provenance activity.
   */
  agent?: ProvenanceAgent[] | undefined;
  /**
   * How the entity was used during the activity.
   */
  role: ('derivation'|'revision'|'quotation'|'source'|'removal');
  _role?: Element | undefined;
  /**
   * whatIdentity should be used for entities that are not a Resource type.
   */
  what: Reference;

}