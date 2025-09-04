import { Element } from './Element';
import { Reference } from './Reference';

/**
 * A  text note which also  contains information about who made the statement and when.
 */
export interface Annotation extends Element {

  /**
   * Organization is used when there's no need for specific attribution as to who made the comment.
   */
  authorReference?: Reference | undefined;
  /**
   * Organization is used when there's no need for specific attribution as to who made the comment.
   */
  authorString?: string | undefined;
  _authorString?: Element | undefined;
  /**
   * The text of the annotation in markdown format.
   */
  text: string;
  _text?: Element | undefined;
  /**
   * Indicates when this particular annotation was made.
   */
  time?: string | undefined;
  _time?: Element | undefined;

}