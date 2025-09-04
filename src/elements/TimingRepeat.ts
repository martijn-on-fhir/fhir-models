import 'reflect-metadata';
import { IsOptional, IsNumber, IsArray, IsString, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import { Duration } from './Duration';
import { Period } from './Period';
import { Range } from './Range';

/**
 * A set of rules that describe when a scheduled event can occur.
 */
export class TimingRepeat extends Element {
  /**
   * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  boundsDuration?: Duration;

  /**
   * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  boundsRange?: Range;

  /**
   * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  boundsPeriod?: Period;

  /**
   * If you have both bounds and count, then this should be understood as within the bounds period, until count times happens.
   */
  @IsOptional()
  @IsNumber()
  count?: number;

  /**
   * If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times.
   */
  @IsOptional()
  @IsNumber()
  countMax?: number;

  /**
   * If no days are specified, the action is assumed to happen every day as otherwise specified. The elements frequency and period cannot be used as well as dayOfWeek.
   */
  @IsOptional()
  @IsArray()
  @IsIn(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'], { each: true })
  dayOfWeek?: Array<'mon'|'tue'|'wed'|'thu'|'fri'|'sat'|'sun'>;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _dayOfWeek?: Element[];

  /**
   * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
   */
  @IsOptional()
  @IsNumber()
  duration?: number;

  /**
   * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
   */
  @IsOptional()
  @IsNumber()
  durationMax?: number;

  /**
   * The units of time for the duration, in UCUM units.
   */
  @IsOptional()
  @IsIn(['s', 'min', 'h', 'd', 'wk', 'mo', 'a'])
  durationUnit?: 's'|'min'|'h'|'d'|'wk'|'mo'|'a';

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _durationUnit?: Element;

  /**
   * The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency.
   */
  @IsOptional()
  @IsNumber()
  frequency?: number;

  /**
   * If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.
   */
  @IsOptional()
  @IsNumber()
  frequencyMax?: number;

  /**
   * The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.
   */
  @IsOptional()
  @IsNumber()
  offset?: number;

  /**
   * Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length.
   */
  @IsOptional()
  @IsNumber()
  period?: number;

  /**
   * If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days.
   */
  @IsOptional()
  @IsNumber()
  periodMax?: number;

  /**
   * The units of time for the period in UCUM units.
   */
  @IsOptional()
  @IsIn(['s', 'min', 'h', 'd', 'wk', 'mo', 'a'])
  periodUnit?: 's'|'min'|'h'|'d'|'wk'|'mo'|'a';

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _periodUnit?: Element;

  /**
   * When time of day is specified, it is inferred that the action happens every day (as filtered by dayofWeek) on the specified times. The elements when, frequency and period cannot be used as well as timeOfDay.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  timeOfDay?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _timeOfDay?: Element[];

  /**
   * When more than one event is listed, the event is tied to the union of the specified events.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  when?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _when?: Element[];

  /**
   * Constructor for TimingRepeat
   */
  constructor(source: Partial<TimingRepeat> = {}) {
    super(source);
  }
}