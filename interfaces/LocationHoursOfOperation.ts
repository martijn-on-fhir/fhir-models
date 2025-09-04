import { Array } from './Array';
import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
 * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
 */
export interface LocationHoursOfOperation extends BackboneElement {

  /**
   * The Location is open all day.
   */
  allDay?: boolean | undefined;
  _allDay?: Element | undefined;
  /**
   * Time that the Location closes.
   */
  closingTime?: string | undefined;
  _closingTime?: Element | undefined;
  /**
   * Indicates which days of the week are available between the start and end Times.
   */
  daysOfWeek?: Array<'mon'|'tue'|'wed'|'thu'|'fri'|'sat'|'sun'> | undefined;
  _daysOfWeek?: Element[] | undefined;
  /**
   * Time that the Location opens.
   */
  openingTime?: string | undefined;
  _openingTime?: Element | undefined;

}