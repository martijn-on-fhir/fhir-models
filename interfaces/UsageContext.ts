import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { Element } from './Element';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Reference } from './Reference';

/**
 * Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).
 */
export interface UsageContext extends Element {

  /**
   * A code that identifies the type of context being specified by this usage context.
   */
  code: Coding;
  /**
   * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
   */
  valueCodeableConcept?: CodeableConcept | undefined;
  /**
   * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
   */
  valueQuantity?: Quantity | undefined;
  /**
   * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
   */
  valueRange?: Range | undefined;
  /**
   * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
   */
  valueReference?: Reference | undefined;

}