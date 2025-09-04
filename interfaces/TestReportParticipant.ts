import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * A participant in the test execution, either the execution engine, a client, or a server.
 */
export interface TestReportParticipant extends BackboneElement {

  /**
   * The display name of the participant.
   */
  display?: string | undefined;
  _display?: Element | undefined;
  /**
   * The type of participant.
   */
  type: ('test-engine'|'client'|'server');
  _type?: Element | undefined;
  /**
   * The uri of the participant. An absolute URL is preferred.
   */
  uri: string;
  _uri?: Element | undefined;

}