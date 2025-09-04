import { AuditEventAgent } from './AuditEventAgent';
import { AuditEventEntity } from './AuditEventEntity';
import { AuditEventSource } from './AuditEventSource';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Period } from './Period';

/**
 * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
 */
export interface AuditEvent extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'AuditEvent';
  /**
   * Indicator for type of action performed during the event that generated the audit.
   */
  action?: string | undefined;
  _action?: Element | undefined;
  /**
   * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity.
   * For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
   */
  agent: AuditEventAgent[];
  /**
   * Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
   */
  entity?: AuditEventEntity[] | undefined;
  /**
   * In some cases a "success" may be partial, for example, an incomplete or interrupted transfer of a radiological study. For the purpose of establishing accountability, these distinctions are not relevant.
   */
  outcome?: string | undefined;
  _outcome?: Element | undefined;
  /**
   * A free text description of the outcome of the event.
   */
  outcomeDesc?: string | undefined;
  _outcomeDesc?: Element | undefined;
  /**
   * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
   */
  period?: Period | undefined;
  /**
   * Use AuditEvent.agent.purposeOfUse when you know that it is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
   */
  purposeOfEvent?: CodeableConcept[] | undefined;
  /**
   * In a distributed system, some sort of common time base (e.g. an NTP [RFC1305] server) is a good implementation tactic.
   */
  recorded: string;
  _recorded?: Element | undefined;
  /**
   * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
   */
  source: AuditEventSource;
  /**
   * Identifier for the category of event.
   */
  subtype?: Coding[] | undefined;
  /**
   * Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function.
   */
  type: Coding;

}