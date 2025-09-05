import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Range } from '../elements/Range';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ObservationDefinitionQualifiedInterval extends BackboneElement {
  /**
   * Some analytes vary greatly over age.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  age?: Range;

  /**
   * If this element is not present then the global population is assumed.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  appliesTo?: CodeableConcept[];

  /**
   * The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
   */
  @IsOptional()
  @IsIn(['reference', 'critical', 'absolute'])
  category?: ('reference'|'critical'|'absolute');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _category?: Element;

  /**
   * Text based condition for which the reference range is valid.
   */
  @IsOptional()
  @IsString()
  condition?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _condition?: Element;

  /**
   * Codes to indicate the health context the range applies to. For example, the normal or therapeutic range.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  context?: CodeableConcept;

  /**
   * Sex of the population the range applies to.
   */
  @IsOptional()
  @IsIn(['male', 'female', 'other', 'unknown'])
  gender?: ('male'|'female'|'other'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _gender?: Element;

  /**
   * The gestational age to which this reference range is applicable, in the context of pregnancy.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  gestationalAge?: Range;

  /**
   * The low and high values determining the interval. There may be only one of the two.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  range?: Range;

  /**
   * Constructor for ObservationDefinitionQualifiedInterval
   */
  constructor(source: Partial<ObservationDefinitionQualifiedInterval> = {}) {
    super(source);
  }
}
