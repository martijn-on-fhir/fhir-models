import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Duration } from './Duration';
import { Element } from './Element';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Ratio } from './Ratio';

/**
 * When multiple targets are present for a single goal instance, all targets must be met for the overall goal to be met.
 */
export interface GoalTarget extends BackboneElement {

  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailQuantity?: Quantity | undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailRange?: Range | undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailCodeableConcept?: CodeableConcept | undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailString?: string | undefined;
  _detailString?: Element | undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailBoolean?: boolean | undefined;
  _detailBoolean?: Element | undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailInteger?: number | undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailRatio?: Ratio | undefined;
  /**
   * Indicates either the date or the duration after start by which the goal should be met.
   */
  dueDate?: string | undefined;
  _dueDate?: Element | undefined;
  /**
   * Indicates either the date or the duration after start by which the goal should be met.
   */
  dueDuration?: Duration | undefined;
  /**
   * The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
   */
  measure?: CodeableConcept | undefined;

}