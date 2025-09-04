import { Array } from './Array';
import { Element } from './Element';

/**
 * The Type of the element can be left blank in a differential constraint, in which case the type is inherited from the resource. Abstract types are not permitted to appear as a type when multiple types are listed.  (I.e. Abstract types cannot be part of a choice).
 */
export interface ElementDefinitionType extends Element {

  /**
   * See [Aggregation Rules](elementdefinition.html#aggregation) for further clarification.
   */
  aggregation?: Array<'contained'|'referenced'|'bundled'> | undefined;
  _aggregation?: Element[] | undefined;
  /**
   * If the element is a reference to another resource, this element contains "Reference", and the targetProfile element defines what resources can be referenced. The targetProfile may be a reference to the general definition of a resource (e.g. http://hl7.org/fhir/StructureDefinition/Patient).
   */
  code: string;
  _code?: Element | undefined;
  /**
   * It is possible to profile  backbone element (e.g. part of a resource), using the [profile-element](extension-elementdefinition-profile-element.html) extension.
   */
  profile?: string[] | undefined;
  _profile?: Element[] | undefined;
  /**
   * Used when the type is "Reference" or "canonical", and identifies a profile structure or implementation Guide that applies to the target of the reference this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide.
   */
  targetProfile?: string[] | undefined;
  _targetProfile?: Element[] | undefined;
  /**
   * The base specification never makes a rule as to which form is allowed, but implementation guides may do this. See [Aggregation Rules](elementdefinition.html#aggregation) for further clarification.
   */
  versioning?: ('either'|'independent'|'specific') | undefined;
  _versioning?: Element | undefined;

}