import { Array } from './Array';
import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Note that filters defined in code systems usually require custom code on the part of any terminology engine that will make them available for use in value set filters. For this reason, they are generally only seen in high value published terminologies.
 */
export interface CodeSystemFilter extends BackboneElement {

  /**
   * The code that identifies this filter when it is used as a filter in [ValueSet](valueset.html#).compose.include.filter.
   */
  code: string;
  _code?: Element | undefined;
  /**
   * A description of how or why the filter is used.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * A list of operators that can be used with the filter.
   */
  operator: Array<'='|'is-a'|'descendent-of'|'is-not-a'|'regex'|'in'|'not-in'|'generalizes'|'exists'>;
  _operator?: Element[] | undefined;
  /**
   * A description of what the value for the filter should be.
   */
  value: string;
  _value?: Element | undefined;

}