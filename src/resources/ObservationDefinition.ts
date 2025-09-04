import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { ObservationDefinitionQualifiedInterval } from '../backbone/ObservationDefinitionQualifiedInterval';
import { ObservationDefinitionQuantitativeDetails } from '../backbone/ObservationDefinitionQuantitativeDetails';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ObservationDefinition extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'ObservationDefinition' as const;

  /**
   * The set of abnormal coded results for the observation conforming to this ObservationDefinition.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  abnormalCodedValueSet?: Reference;

  /**
   * This element allows various categorization schemes based on the owner’s definition of the category and effectively multi
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /**
   * Describes what will be observed. Sometimes this is called the observation "name".
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * The set of critical coded results for the observation conforming to this ObservationDefinition.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  criticalCodedValueSet?: Reference;

  /**
   * A unique identifier assigned to this ObservationDefinition artifact.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Only used if not implicit in observation code.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  method?: CodeableConcept;

  /**
   * An example of observation allowing multiple results is "bacteria identified by culture". Conversely, the measurement of 
   */
  @IsOptional()
  @IsBoolean()
  multipleResultsAllowed?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _multipleResultsAllowed?: Element;

  /**
   * The set of normal coded results for the observations conforming to this ObservationDefinition.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  normalCodedValueSet?: Reference;

  /**
   * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
   */
  @IsOptional()
  @IsIn(['Quantity', 'CodeableConcept', 'string', 'boolean', 'integer', 'Range', 'Ratio', 'SampledData', 'time', 'dateTime', 'Period'])
  permittedDataType?: Array<'Quantity'|'CodeableConcept'|'string'|'boolean'|'integer'|'Range'|'Ratio'|'SampledData'|'time'|'dateTime'|'Period'>;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _permittedDataType?: Element[];

  /**
   * The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
   */
  @IsOptional()
  @IsString()
  preferredReportName?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _preferredReportName?: Element;

  /**
   * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this Ob
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationDefinitionQualifiedInterval)
  qualifiedInterval?: ObservationDefinitionQualifiedInterval[];

  /**
   * Characteristics for quantitative results of this observation.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ObservationDefinitionQuantitativeDetails)
  quantitativeDetails?: ObservationDefinitionQuantitativeDetails;

  /**
   * The set of valid coded results for the observations  conforming to this ObservationDefinition.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  validCodedValueSet?: Reference;

  /**
   * Constructor for ObservationDefinition
   */
  constructor(source: Partial<ObservationDefinition> = {}) {
    super(source);
    this.resourceType = 'ObservationDefinition';
  }
}
