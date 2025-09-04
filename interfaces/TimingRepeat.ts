import { Array } from './Array';
import { Duration } from './Duration';
import { Element } from './Element';
import { Period } from './Period';
import { Range } from './Range';

/**
 * A set of rules that describe when the event is scheduled.
 */
export interface TimingRepeat extends Element {

  /**
   * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
   */
  boundsDuration?: Duration | undefined;
  /**
   * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
   */
  boundsRange?: Range | undefined;
  /**
   * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
   */
  boundsPeriod?: Period | undefined;
  /**
   * If you have both bounds and count, then this should be understood as within the bounds period, until count times happens.
   */
  count?: number | undefined;
  /**
   * If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times.
   */
  countMax?: number | undefined;
  /**
   * If no days are specified, the action is assumed to happen every day as otherwise specified. The elements frequency and period cannot be used as well as dayOfWeek.
   */
  dayOfWeek?: Array<'mon'|'tue'|'wed'|'thu'|'fri'|'sat'|'sun'> | undefined;
  _dayOfWeek?: Element[] | undefined;
  /**
   * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
   */
  duration?: number | undefined;
  /**
   * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
   */
  durationMax?: number | undefined;
  /**
   * The units of time for the duration, in UCUM units.
   */
  durationUnit?: ('s'|'min'|'h'|'d'|'wk'|'mo'|'a') | undefined;
  _durationUnit?: Element | undefined;
  /**
   * The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency.
   */
  frequency?: number | undefined;
  /**
   * If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.
   */
  frequencyMax?: number | undefined;
  /**
   * The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.
   */
  offset?: number | undefined;
  /**
   * Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length.
   */
  period?: number | undefined;
  /**
   * If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days.
   */
  periodMax?: number | undefined;
  /**
   * The units of time for the period in UCUM units.
   */
  periodUnit?: ('s'|'min'|'h'|'d'|'wk'|'mo'|'a') | undefined;
  _periodUnit?: Element | undefined;
  /**
   * When time of day is specified, it is inferred that the action happens every day (as filtered by dayofWeek) on the specified times. The elements when, frequency and period cannot be used as well as timeOfDay.
   */
  timeOfDay?: string[] | undefined;
  _timeOfDay?: Element[] | undefined;
  /**
   * When more than one event is listed, the event is tied to the union of the specified events.
   */
  when?: string[] | undefined;
  _when?: Element[] | undefined;

}