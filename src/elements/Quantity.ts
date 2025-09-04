import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address form
 */
export class Quantity extends Element implements fhir.Quantity {
  /**
   * The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.
   */
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is
   */
  @IsOptional()
  @IsIn(['<', '<=', '>=', '>'])
  comparator?: ('<'|'<='|'>='|'>');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _comparator?: Element;

  /**
   * The identification of the system that provides the coded form of the unit.
   */
  @IsOptional()
  @IsString()
  system?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _system?: Element;

  /**
   * A human-readable form of the unit.
   */
  @IsOptional()
  @IsString()
  unit?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _unit?: Element;

  /**
   * The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).
   */
  @IsOptional()
  @IsNumber()
  value?: number;

  /**
   * Constructor for Quantity
   */
  constructor(source: Partial<Quantity> = {}) {
    super(source);
  }
}
