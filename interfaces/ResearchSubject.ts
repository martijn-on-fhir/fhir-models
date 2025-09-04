import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * A physical entity which is the primary unit of operational and/or administrative interest in a study.
 */
export interface ResearchSubject extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'ResearchSubject';
  /**
   * The name of the arm in the study the subject actually followed as part of this study.
   */
  actualArm?: string | undefined;
  _actualArm?: Element | undefined;
  /**
   * The name of the arm in the study the subject is expected to follow as part of this study.
   */
  assignedArm?: string | undefined;
  _assignedArm?: Element | undefined;
  /**
   * A record of the patient's informed agreement to participate in the study.
   */
  consent?: Reference | undefined;
  /**
   * Identifiers assigned to this research subject for a study.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The record of the person or animal who is involved in the study.
   */
  individual: Reference;
  /**
   * The dates the subject began and ended their participation in the study.
   */
  period?: Period | undefined;
  /**
   * The current state of the subject.
   */
  status: ('candidate'|'eligible'|'follow-up'|'ineligible'|'not-registered'|'off-study'|'on-study'|'on-study-intervention'|'on-study-observation'|'pending-on-study'|'potential-candidate'|'screening'|'withdrawn');
  _status?: Element | undefined;
  /**
   * Reference to the study the subject is participating in.
   */
  study: Reference;

}