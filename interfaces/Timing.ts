import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { TimingRepeat } from './TimingRepeat';

/**
 * Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.
 */
export interface Timing extends BackboneElement {

  /**
   * BID etc. are defined as 'at institutionally specified times'. For example, an institution may choose that BID is "always at 7am and 6pm".  If it is inappropriate for this choice to be made, the code BID should not be used. Instead, a distinct organization-specific code should be used in place of the HL7-defined BID code and/or a structured representation should be used (in this case, specifying the two event times).
   */
  code?: CodeableConcept | undefined;
  /**
   * Identifies specific times when the event occurs.
   */
  event?: string[] | undefined;
  _event?: Element[] | undefined;
  /**
   * A set of rules that describe when the event is scheduled.
   */
  repeat?: TimingRepeat | undefined;

}