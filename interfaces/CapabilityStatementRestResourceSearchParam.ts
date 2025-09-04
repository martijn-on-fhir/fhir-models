import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * The search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this resource (though many will be listed at [CapabilityStatement.rest.searchParam](capabilitystatement-definitions.html#CapabilityStatement.rest.searchParam)). The behavior of some search parameters may be further described by other code or extension elements, or narrative within the capability statement or linked [SearchParameter](searchparameter.html#) definitions.
 */
export interface CapabilityStatementRestResourceSearchParam extends BackboneElement {

  /**
   * This SHOULD be present, and matches refers to a SearchParameter by its canonical URL. If systems wish to document their support for modifiers, comparators, target resource types, and chained parameters, they should do using a search parameter resource. This element SHALL be populated if the search parameter refers to a SearchParameter defined by the FHIR core specification or externally defined IGs.
   */
  definition?: string | undefined;
  _definition?: Element | undefined;
  /**
   * This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.
   */
  documentation?: string | undefined;
  _documentation?: Element | undefined;
  /**
   * Parameter names cannot overlap with standard parameter names, and standard parameters cannot be redefined.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * While this can be looked up from the definition, it is included here as a convenience for systems that autogenerate a query interface based on the server capability statement.  It SHALL be the same as the type in the search parameter definition.
   */
  type: ('number'|'date'|'string'|'token'|'reference'|'composite'|'quantity'|'uri'|'special');
  _type?: Element | undefined;

}