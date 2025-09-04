import { CodeableConcept } from './CodeableConcept';
import { DataRequirementCodeFilter } from './DataRequirementCodeFilter';
import { DataRequirementDateFilter } from './DataRequirementDateFilter';
import { DataRequirementSort } from './DataRequirementSort';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 */
export interface DataRequirement extends Element {

  /**
   * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
   */
  codeFilter?: DataRequirementCodeFilter[] | undefined;
  /**
   * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
   */
  dateFilter?: DataRequirementDateFilter[] | undefined;
  /**
   * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5".
   */
  limit?: number | undefined;
  /**
   * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available.
   * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
   */
  mustSupport?: string[] | undefined;
  _mustSupport?: Element[] | undefined;
  /**
   * The profile of the required data, specified as the uri of the profile definition.
   */
  profile?: string[] | undefined;
  _profile?: Element[] | undefined;
  /**
   * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
   */
  sort?: DataRequirementSort[] | undefined;
  /**
   * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  subjectCodeableConcept?: CodeableConcept | undefined;
  /**
   * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  subjectReference?: Reference | undefined;
  /**
   * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
   */
  type: string;
  _type?: Element | undefined;

}