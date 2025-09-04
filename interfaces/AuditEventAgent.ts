import { AuditEventAgentNetwork } from './AuditEventAgentNetwork';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { Element } from './Element';
import { Reference } from './Reference';
import { Where } from './Where';

/**
 * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity.
 * For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
 */
export interface AuditEventAgent extends BackboneElement {

  /**
   * Alternative agent Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.
   */
  altId?: string | undefined;
  _altId?: Element | undefined;
  /**
   * Where the event occurred.
   */
  location?: Reference | undefined;
  /**
   * Type of media involved. Used when the event is about exporting/importing onto media.
   */
  media?: Coding | undefined;
  /**
   * Human-meaningful name for the agent.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * Logical network location for application activity, if the activity has a network location.
   */
  network?: AuditEventAgentNetwork | undefined;
  /**
   * For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
   */
  policy?: string[] | undefined;
  _policy?: Element[] | undefined;
  /**
   * Use AuditEvent.agent.purposeOfUse when you know that is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
   */
  purposeOfUse?: CodeableConcept[] | undefined;
  /**
   * There can only be one initiator. If the initiator is not clear, then do not choose any one agent as the initiator.
   */
  requestor: boolean;
  _requestor?: Element | undefined;
  /**
   * Should be roles relevant to the event. Should  not be an exhaustive list of roles.
   */
  role?: CodeableConcept[] | undefined;
  /**
   * Specification of the participation type the user plays when performing the event.
   */
  type?: CodeableConcept | undefined;
  /**
   * Where a User ID is available it will go into who.identifier.
   */
  who?: Reference | undefined;

}