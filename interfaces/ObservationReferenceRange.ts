import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Quantity } from './Quantity';
import { Range } from './Range';

/**
 * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
 */
export interface ObservationReferenceRange extends BackboneElement {

  /**
   * The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.
   */
  age?: Range | undefined;
  /**
   * This SHOULD be populated if there is more than one range.  If this element is not present then the normal population is assumed.
   */
  appliesTo?: CodeableConcept[] | undefined;
  /**
   * The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is >= 2.3).
   */
  high?: Quantity | undefined;
  /**
   * The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is <=2.3).
   */
  low?: Quantity | undefined;
  /**
   * Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of "normals".
   */
  text?: string | undefined;
  _text?: Element | undefined;
  /**
   * This SHOULD be populated if there is more than one range.  If this element is not present then the normal range is assumed.
   */
  type?: CodeableConcept | undefined;

}