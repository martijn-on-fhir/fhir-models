import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * A note that describes or explains adjudication results in a human readable form.
 */
export interface ClaimResponseProcessNote extends BackboneElement {

  /**
   * Only required if the language is different from the resource language.
   */
  language?: CodeableConcept | undefined;
  /**
   * A number to uniquely identify a note entry.
   */
  number?: number | undefined;
  /**
   * The explanation or description associated with the processing.
   */
  text: string;
  _text?: Element | undefined;
  /**
   * The business purpose of the note text.
   */
  type?: ('display'|'print'|'printoper') | undefined;
  _type?: Element | undefined;

}