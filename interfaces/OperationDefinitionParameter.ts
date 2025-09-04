import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { OperationDefinitionParameterBinding } from './OperationDefinitionParameterBinding';
import { OperationDefinitionParameterReferencedFrom } from './OperationDefinitionParameterReferencedFrom';

/**
 * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
 */
export interface OperationDefinitionParameter extends BackboneElement {

  /**
   * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
   */
  binding?: OperationDefinitionParameterBinding | undefined;
  /**
   * Describes the meaning or use of this parameter.
   */
  documentation?: string | undefined;
  _documentation?: Element | undefined;
  /**
   * The maximum number of times this element is permitted to appear in the request or response.
   */
  max: string;
  _max?: Element | undefined;
  /**
   * The minimum number of times this parameter SHALL appear in the request or response.
   */
  min: number;
  /**
   * This name must be a token (start with a letter in a..z, and only contain letters, numerals, and underscore. Note that for search parameters (type = string, with a search type), the name may be altered by the search modifiers.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
   */
  part?: OperationDefinitionParameter[] | undefined;
  /**
   * Resolution applies if the referenced parameter exists.
   */
  referencedFrom?: OperationDefinitionParameterReferencedFrom[] | undefined;
  /**
   * How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.
   */
  searchType?: ('number'|'date'|'string'|'token'|'reference'|'composite'|'quantity'|'uri'|'special') | undefined;
  _searchType?: Element | undefined;
  /**
   * Often, these profiles are the base definitions from the spec (e.g. http://hl7.org/fhir/StructureDefinition/Patient).
   */
  targetProfile?: string[] | undefined;
  _targetProfile?: Element[] | undefined;
  /**
   * if there is no stated parameter, then the parameter is a multi-part parameter; type and must have at least one part defined.
   */
  type?: string | undefined;
  _type?: Element | undefined;
  /**
   * If a parameter name is used for both an input and an output parameter, the parameter should be defined twice.
   */
  use: ('in'|'out');
  _use?: Element | undefined;

}