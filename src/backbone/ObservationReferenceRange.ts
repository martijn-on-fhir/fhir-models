import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ObservationReferenceRange extends BackboneElement {
  /**
   * The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meanin
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  age?: Range;

  /**
   * This SHOULD be populated if there is more than one range.  If this element is not present then the normal population is 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  appliesTo?: CodeableConcept[];

  /**
   * The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  high?: Quantity;

  /**
   * The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the va
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  low?: Quantity;

  /**
   * Text based reference range in an observation which may be used when a quantitative range is not appropriate for an obser
   */
  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _text?: Element;

  /**
   * This SHOULD be populated if there is more than one range.  If this element is not present then the normal range is assum
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for ObservationReferenceRange
   */
  constructor(source: Partial<ObservationReferenceRange> = {}) {
    super(source);
  }
}
