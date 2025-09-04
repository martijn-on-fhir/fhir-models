import { Attachment } from './Attachment';
import { BackboneElement } from './BackboneElement';
import { Coding } from './Coding';
import { Element } from './Element';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * Response to offer text.
 */
export interface ContractTermOfferAnswer extends BackboneElement {

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueBoolean?: boolean | undefined;
  _valueBoolean?: Element | undefined;
  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueDecimal?: number | undefined;
  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueInteger?: number | undefined;
  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueDate?: string | undefined;
  _valueDate?: Element | undefined;
  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueDateTime?: string | undefined;
  _valueDateTime?: Element | undefined;
  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueTime?: string | undefined;
  _valueTime?: Element | undefined;
  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueString?: string | undefined;
  _valueString?: Element | undefined;
  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueUri?: string | undefined;
  _valueUri?: Element | undefined;
  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueAttachment?: Attachment | undefined;
  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueCoding?: Coding | undefined;
  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueQuantity?: Quantity | undefined;
  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueReference?: Reference | undefined;

}