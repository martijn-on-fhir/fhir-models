import { Coding } from './Coding';
import { Element } from './Element';

/**
 * A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
 */
export interface CodeableConcept extends Element {

  /**
   * Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.
   */
  coding?: Coding[] | undefined;
  /**
   * Very often the text is the same as a displayName of one of the codings.
   */
  text?: string | undefined;
  _text?: Element | undefined;

}