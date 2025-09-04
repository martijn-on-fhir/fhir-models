import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Range } from './Range';

/**
 * A populatioof people with some set of grouping criteria.
 */
export interface Population extends BackboneElement {

  /**
   * The age of the specific population.
   */
  ageRange?: Range | undefined;
  /**
   * The age of the specific population.
   */
  ageCodeableConcept?: CodeableConcept | undefined;
  /**
   * The gender of the specific population.
   */
  gender?: CodeableConcept | undefined;
  /**
   * The existing physiological conditions of the specific population to which this applies.
   */
  physiologicalCondition?: CodeableConcept | undefined;
  /**
   * Race of the specific population.
   */
  race?: CodeableConcept | undefined;

}