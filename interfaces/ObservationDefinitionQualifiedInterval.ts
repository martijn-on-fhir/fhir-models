import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Range } from './Range';

/**
 * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
 */
export interface ObservationDefinitionQualifiedInterval extends BackboneElement {

  /**
   * Some analytes vary greatly over age.
   */
  age?: Range | undefined;
  /**
   * If this element is not present then the global population is assumed.
   */
  appliesTo?: CodeableConcept[] | undefined;
  /**
   * The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
   */
  category?: ('reference'|'critical'|'absolute') | undefined;
  _category?: Element | undefined;
  /**
   * Text based condition for which the reference range is valid.
   */
  condition?: string | undefined;
  _condition?: Element | undefined;
  /**
   * Codes to indicate the health context the range applies to. For example, the normal or therapeutic range.
   */
  context?: CodeableConcept | undefined;
  /**
   * Sex of the population the range applies to.
   */
  gender?: ('male'|'female'|'other'|'unknown') | undefined;
  _gender?: Element | undefined;
  /**
   * The gestational age to which this reference range is applicable, in the context of pregnancy.
   */
  gestationalAge?: Range | undefined;
  /**
   * The low and high values determining the interval. There may be only one of the two.
   */
  range?: Range | undefined;

}