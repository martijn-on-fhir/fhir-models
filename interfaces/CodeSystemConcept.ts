import { BackboneElement } from './BackboneElement';
import { CodeSystemConceptDesignation } from './CodeSystemConceptDesignation';
import { CodeSystemConceptProperty } from './CodeSystemConceptProperty';
import { Element } from './Element';

/**
 * If this is empty, it means that the code system resource does not represent the content of the code system.
 */
export interface CodeSystemConcept extends BackboneElement {

  /**
   * A code - a text symbol - that uniquely identifies the concept within the code system.
   */
  code: string;
  _code?: Element | undefined;
  /**
   * Defines children of a concept to produce a hierarchy of concepts. The nature of the relationships is variable (is-a/contains/categorizes) - see hierarchyMeaning.
   */
  concept?: CodeSystemConcept[] | undefined;
  /**
   * The formal definition of the concept. The code system resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.
   */
  definition?: string | undefined;
  _definition?: Element | undefined;
  /**
   * Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](resource.html#language).
   */
  designation?: CodeSystemConceptDesignation[] | undefined;
  /**
   * A human readable string that is the recommended default way to present this concept to a user.
   */
  display?: string | undefined;
  _display?: Element | undefined;
  /**
   * A property value for this concept.
   */
  property?: CodeSystemConceptProperty[] | undefined;

}