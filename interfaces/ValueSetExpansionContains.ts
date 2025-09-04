import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { ValueSetComposeIncludeConceptDesignation } from './ValueSetComposeIncludeConceptDesignation';

/**
 * The codes that are contained in the value set expansion.
 */
export interface ValueSetExpansionContains extends BackboneElement {

  /**
   * This should not be understood to exclude its use for searching (e.g. by subsumption testing). The client should know whether it is appropriate for the user to select an abstract code or not.
   */
  abstract?: boolean | undefined;
  _abstract?: Element | undefined;
  /**
   * The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder (abstract) and does not represent a valid code in the value set.
   */
  code?: string | undefined;
  _code?: Element | undefined;
  /**
   * If the expansion uses this element, there is  no implication about the logical relationship between them, and the  structure cannot be used for logical inferencing. The structure  exists to provide navigational assistance for helping human users to  locate codes in the expansion.
   */
  contains?: ValueSetExpansionContains[] | undefined;
  /**
   * The designations provided must be based on the value set and code system definitions.
   */
  designation?: ValueSetComposeIncludeConceptDesignation[] | undefined;
  /**
   * The recommended display for this item in the expansion.
   */
  display?: string | undefined;
  _display?: Element | undefined;
  /**
   * This should only have a value if the concept is inactive.
   */
  inactive?: boolean | undefined;
  _inactive?: Element | undefined;
  /**
   * An absolute URI which is the code system in which the code for this item in the expansion is defined.
   */
  system?: string | undefined;
  _system?: Element | undefined;
  /**
   * The exact value of the version string is specified by the system from which the code is derived.
   */
  version?: string | undefined;
  _version?: Element | undefined;

}