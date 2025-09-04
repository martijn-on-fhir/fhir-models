import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { ExampleScenarioInstanceContainedInstance } from './ExampleScenarioInstanceContainedInstance';

/**
 * Each interaction or action.
 */
export interface ExampleScenarioProcessStepOperation extends BackboneElement {

  /**
   * A comment to be inserted in the diagram.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Who starts the transaction.
   */
  initiator?: string | undefined;
  _initiator?: Element | undefined;
  /**
   * Whether the initiator is deactivated right after the transaction.
   */
  initiatorActive?: boolean | undefined;
  _initiatorActive?: Element | undefined;
  /**
   * The human-friendly name of the interaction.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * The sequential number of the interaction, e.g. 1.2.5.
   */
  number: string;
  _number?: Element | undefined;
  /**
   * Who receives the transaction.
   */
  receiver?: string | undefined;
  _receiver?: Element | undefined;
  /**
   * Whether the receiver is deactivated right after the transaction.
   */
  receiverActive?: boolean | undefined;
  _receiverActive?: Element | undefined;
  /**
   * Each resource instance used by the initiator.
   */
  request?: ExampleScenarioInstanceContainedInstance | undefined;
  /**
   * Each resource instance used by the responder.
   */
  response?: ExampleScenarioInstanceContainedInstance | undefined;
  /**
   * The type of operation - CRUD.
   */
  type?: string | undefined;
  _type?: Element | undefined;

}