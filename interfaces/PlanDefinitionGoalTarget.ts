import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Duration } from './Duration';
import { Quantity } from './Quantity';
import { Range } from './Range';

/**
 * Indicates what should be done and within what timeframe.
 */
export interface PlanDefinitionGoalTarget extends BackboneElement {

  /**
   * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
   */
  detailQuantity?: Quantity | undefined;
  /**
   * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
   */
  detailRange?: Range | undefined;
  /**
   * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
   */
  detailCodeableConcept?: CodeableConcept | undefined;
  /**
   * Indicates the timeframe after the start of the goal in which the goal should be met.
   */
  due?: Duration | undefined;
  /**
   * The parameter whose value is to be tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
   */
  measure?: CodeableConcept | undefined;

}