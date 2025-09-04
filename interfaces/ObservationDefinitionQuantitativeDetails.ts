import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';

/**
 * Characteristics for quantitative results of this observation.
 */
export interface ObservationDefinitionQuantitativeDetails extends BackboneElement {

  /**
   * Factor for converting value expressed with SI unit to value expressed with customary unit.
   */
  conversionFactor?: number | undefined;
  /**
   * Customary unit used to report quantitative results of observations conforming to this ObservationDefinition.
   */
  customaryUnit?: CodeableConcept | undefined;
  /**
   * Number of digits after decimal separator when the results of such observations are of type Quantity.
   */
  decimalPrecision?: number | undefined;
  /**
   * SI unit used to report quantitative results of observations conforming to this ObservationDefinition.
   */
  unit?: CodeableConcept | undefined;

}