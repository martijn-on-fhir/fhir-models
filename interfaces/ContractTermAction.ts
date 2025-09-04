import { Annotation } from './Annotation';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { ContractTermActionSubject } from './ContractTermActionSubject';
import { Element } from './Element';
import { Period } from './Period';
import { Reference } from './Reference';
import { Timing } from './Timing';

/**
 * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
 * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
 */
export interface ContractTermAction extends BackboneElement {

  /**
   * Encounter or Episode with primary association to specified term activity.
   */
  context?: Reference | undefined;
  /**
   * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
   */
  contextLinkId?: string[] | undefined;
  _contextLinkId?: Element[] | undefined;
  /**
   * True if the term prohibits the  action.
   */
  doNotPerform?: boolean | undefined;
  _doNotPerform?: Element | undefined;
  /**
   * Reason or purpose for the action stipulated by this Contract Provision.
   */
  intent: CodeableConcept;
  /**
   * Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.
   */
  linkId?: string[] | undefined;
  _linkId?: Element[] | undefined;
  /**
   * Comments made about the term action made by the requester, performer, subject or other participants.
   */
  note?: Annotation[] | undefined;
  /**
   * When action happens.
   */
  occurrenceDateTime?: string | undefined;
  _occurrenceDateTime?: Element | undefined;
  /**
   * When action happens.
   */
  occurrencePeriod?: Period | undefined;
  /**
   * When action happens.
   */
  occurrenceTiming?: Timing | undefined;
  /**
   * Indicates who or what is being asked to perform (or not perform) the ction.
   */
  performer?: Reference | undefined;
  /**
   * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
   */
  performerLinkId?: string[] | undefined;
  _performerLinkId?: Element[] | undefined;
  /**
   * The type of role or competency of an individual desired or required to perform or not perform the action.
   */
  performerRole?: CodeableConcept | undefined;
  /**
   * The type of individual that is desired or required to perform or not perform the action.
   */
  performerType?: CodeableConcept[] | undefined;
  /**
   * Describes why the action is to be performed or not performed in textual form.
   */
  reason?: string[] | undefined;
  _reason?: Element[] | undefined;
  /**
   * Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited.
   */
  reasonCode?: CodeableConcept[] | undefined;
  /**
   * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
   */
  reasonLinkId?: string[] | undefined;
  _reasonLinkId?: Element[] | undefined;
  /**
   * Indicates another resource whose existence justifies permitting or not permitting this action.
   */
  reasonReference?: Reference[] | undefined;
  /**
   * Who or what initiated the action and has responsibility for its activation.
   */
  requester?: Reference[] | undefined;
  /**
   * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
   */
  requesterLinkId?: string[] | undefined;
  _requesterLinkId?: Element[] | undefined;
  /**
   * Security labels that protects the action.
   */
  securityLabelNumber?: number[] | undefined;
  /**
   * Current state of the term action.
   */
  status: CodeableConcept;
  /**
   * Entity of the action.
   */
  subject?: ContractTermActionSubject[] | undefined;
  /**
   * Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term.
   */
  type: CodeableConcept;

}