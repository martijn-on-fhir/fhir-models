import { Element } from './Element';
import { Period } from './Period';

/**
 * A human's name with the ability to identify parts and usage.
 */
export interface HumanName extends Element {

  /**
   * Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures).
   */
  family?: string | undefined;
  _family?: Element | undefined;
  /**
   * If only initials are recorded, they may be used in place of the full name parts. Initials may be separated into multiple given names but often aren't due to paractical limitations.  This element is not called "first name" since given names do not always come first.
   */
  given?: string[] | undefined;
  _given?: Element[] | undefined;
  /**
   * Indicates the period of time when this name was valid for the named person.
   */
  period?: Period | undefined;
  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
   */
  prefix?: string[] | undefined;
  _prefix?: Element[] | undefined;
  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
   */
  suffix?: string[] | undefined;
  _suffix?: Element[] | undefined;
  /**
   * Can provide both a text representation and parts. Applications updating a name SHALL ensure that when both text and parts are present,  no content is included in the text that isn't found in a part.
   */
  text?: string | undefined;
  _text?: Element | undefined;
  /**
   * Applications can assume that a name is current unless it explicitly says that it is temporary or old.
   */
  use?: ('usual'|'official'|'temp'|'nickname'|'anonymous'|'old'|'maiden') | undefined;
  _use?: Element | undefined;

}