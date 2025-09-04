import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export interface ImplementationGuideDefinitionResource extends BackboneElement {

  /**
   * This is mostly used with examples to explain why it is present (though they can have extensive comments in the examples).
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Examples:
   * * StructureDefinition -> Any
   * * ValueSet -> expansion
   * * OperationDefinition -> Parameters
   * * Questionnaire -> QuestionnaireResponse.
   */
  exampleBoolean?: boolean | undefined;
  _exampleBoolean?: Element | undefined;
  /**
   * Examples:
   * * StructureDefinition -> Any
   * * ValueSet -> expansion
   * * OperationDefinition -> Parameters
   * * Questionnaire -> QuestionnaireResponse.
   */
  exampleCanonical?: string | undefined;
  _exampleCanonical?: Element | undefined;
  /**
   * The resource SHALL be valid against all the versions it is specified to apply to. If the resource referred to is a StructureDefinition, the fhirVersion stated in the StructureDefinition cannot disagree with the version specified here; the specified versions SHALL include the version specified by the StructureDefinition, and may include additional versions using the [applicable-version](extension-structuredefinition-applicable-version.html) extension.
   */
  fhirVersion?: string[] | undefined;
  _fhirVersion?: Element[] | undefined;
  /**
   * This must correspond to a package.id element within this implementation guide.
   */
  groupingId?: string | undefined;
  _groupingId?: Element | undefined;
  /**
   * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
   */
  reference: Reference;

}