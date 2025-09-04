import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
 */
export interface ConceptMapGroupElementTargetDependsOn extends BackboneElement {

  /**
   * The display is ignored when processing the map.
   */
  display?: string | undefined;
  _display?: Element | undefined;
  /**
   * A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somewhere that is labeled to correspond with a code system property.
   */
  property: string;
  _property?: Element | undefined;
  /**
   * An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).
   */
  system?: string | undefined;
  _system?: Element | undefined;
  /**
   * Identity (code or path) or the element/item/ValueSet/text that the map depends on / refers to.
   */
  value: string;
  _value?: Element | undefined;

}