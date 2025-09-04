import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Selecting codes by specifying filters based on properties is only possible where the underlying code system defines appropriate properties. Note that in some cases, the underlying code system defines the logical concepts but not the literal codes for the concepts. In such cases, the literal definitions may be provided by a third party.
 */
export interface ValueSetComposeIncludeFilter extends BackboneElement {

  /**
   * In case filter.property represents a property of the system, the operation applies to the selected property. In case filter.property represents a filter of the system, the operation SHALL match one of the CodeSystem.filter.operator values.
   */
  op: ('='|'is-a'|'descendent-of'|'is-not-a'|'regex'|'in'|'not-in'|'generalizes'|'exists');
  _op?: Element | undefined;
  /**
   * A code that identifies a property or a filter defined in the code system.
   */
  property: string;
  _property?: Element | undefined;
  /**
   * Use regex matching with care - full regex matching on every SNOMED CT term is prohibitive, for example.
   */
  value: string;
  _value?: Element | undefined;

}