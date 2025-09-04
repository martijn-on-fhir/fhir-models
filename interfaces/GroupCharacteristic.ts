import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Reference } from './Reference';

/**
 * All the identified characteristics must be true for an entity to a member of the group.
 */
export interface GroupCharacteristic extends BackboneElement {

  /**
   * A code that identifies the kind of trait being asserted.
   */
  code: CodeableConcept;
  /**
   * This is labeled as "Is Modifier" because applications cannot wrongly include excluded members as included or vice versa.
   */
  exclude: boolean;
  _exclude?: Element | undefined;
  /**
   * The period over which the characteristic is tested; e.g. the patient had an operation during the month of June.
   */
  period?: Period | undefined;
  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  valueCodeableConcept?: CodeableConcept | undefined;
  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  valueBoolean?: boolean | undefined;
  _valueBoolean?: Element | undefined;
  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  valueQuantity?: Quantity | undefined;
  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  valueRange?: Range | undefined;
  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  valueReference?: Reference | undefined;

}