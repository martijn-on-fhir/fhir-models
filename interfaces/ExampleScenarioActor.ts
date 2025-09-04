import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Actor participating in the resource.
 */
export interface ExampleScenarioActor extends BackboneElement {

  /**
   * should this be called ID or acronym?
   */
  actorId: string;
  _actorId?: Element | undefined;
  /**
   * Cardinality: is name and description 1..1?
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Cardinality: is name and description 1..1?
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * The type of actor - person or system.
   */
  type: ('person'|'entity');
  _type?: Element | undefined;

}