import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
 */
export interface ProvenanceAgent extends BackboneElement {

  /**
   * onBehalfOfIdentity should be used when the agent is not a Resource type.
   */
  onBehalfOf?: Reference | undefined;
  /**
   * For example: doctor, nurse, clerk, etc.
   */
  role?: CodeableConcept[] | undefined;
  /**
   * For example: author, performer, enterer, attester, etc.
   */
  type?: CodeableConcept | undefined;
  /**
   * whoIdentity should be used when the agent is not a Resource type.
   */
  who: Reference;

}