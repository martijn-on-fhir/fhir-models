import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { ValueSetComposeIncludeConceptDesignation } from './ValueSetComposeIncludeConceptDesignation';

/**
 * The list of concepts is considered ordered, though the order might not have any particular significance. Typically, the order of an expansion follows that defined in the compose element.
 */
export interface ValueSetComposeIncludeConcept extends BackboneElement {

  /**
   * Expressions are allowed if defined by the underlying code system.
   */
  code: string;
  _code?: Element | undefined;
  /**
   * Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](resource.html#language).
   */
  designation?: ValueSetComposeIncludeConceptDesignation[] | undefined;
  /**
   * The value set resource allows for an alternative display to be specified for when this concept is used in this particular value set. See notes in the value set narrative about the correct use of this element.
   */
  display?: string | undefined;
  _display?: Element | undefined;

}