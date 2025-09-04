import { Array } from './Array';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { ObservationDefinitionQualifiedInterval } from './ObservationDefinitionQualifiedInterval';
import { ObservationDefinitionQuantitativeDetails } from './ObservationDefinitionQuantitativeDetails';
import { Reference } from './Reference';

/**
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 */
export interface ObservationDefinition extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'ObservationDefinition';
  /**
   * The set of abnormal coded results for the observation conforming to this ObservationDefinition.
   */
  abnormalCodedValueSet?: Reference | undefined;
  /**
   * This element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used for one instance of ObservationDefinition. The level of granularity is defined by the category concepts in the value set.
   */
  category?: CodeableConcept[] | undefined;
  /**
   * Describes what will be observed. Sometimes this is called the observation "name".
   */
  code: CodeableConcept;
  /**
   * The set of critical coded results for the observation conforming to this ObservationDefinition.
   */
  criticalCodedValueSet?: Reference | undefined;
  /**
   * A unique identifier assigned to this ObservationDefinition artifact.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Only used if not implicit in observation code.
   */
  method?: CodeableConcept | undefined;
  /**
   * An example of observation allowing multiple results is "bacteria identified by culture". Conversely, the measurement of a potassium level allows a single result.
   */
  multipleResultsAllowed?: boolean | undefined;
  _multipleResultsAllowed?: Element | undefined;
  /**
   * The set of normal coded results for the observations conforming to this ObservationDefinition.
   */
  normalCodedValueSet?: Reference | undefined;
  /**
   * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
   */
  permittedDataType?: Array<'Quantity'|'CodeableConcept'|'string'|'boolean'|'integer'|'Range'|'Ratio'|'SampledData'|'time'|'dateTime'|'Period'> | undefined;
  _permittedDataType?: Element[] | undefined;
  /**
   * The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
   */
  preferredReportName?: string | undefined;
  _preferredReportName?: Element | undefined;
  /**
   * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
   */
  qualifiedInterval?: ObservationDefinitionQualifiedInterval[] | undefined;
  /**
   * Characteristics for quantitative results of this observation.
   */
  quantitativeDetails?: ObservationDefinitionQuantitativeDetails | undefined;
  /**
   * The set of valid coded results for the observations  conforming to this ObservationDefinition.
   */
  validCodedValueSet?: Reference | undefined;

}