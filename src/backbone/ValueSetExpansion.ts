import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ValueSetExpansionContains } from './ValueSetExpansionContains';
import { ValueSetExpansionParameter } from './ValueSetExpansionParameter';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ValueSetExpansion extends BackboneElement implements fhir.ValueSetExpansion {
  /**
   * The codes that are contained in the value set expansion.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueSetExpansionContains)
  contains?: ValueSetExpansionContains[];

  /**
   * Typically, this uri is a UUID (e.g. urn:uuid:8230ff20-c97a-4167-a59d-dc2cb9df16dd).
   */
  @IsOptional()
  @IsString()
  identifier?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _identifier?: Element;

  /**
   * Paging only applies to flat expansions. If a filter is applied, the count is the number of concepts that matched the fil
   */
  @IsOptional()
  @IsNumber()
  offset?: number;

  /**
   * The server decides which parameters to include here, but at a minimum, the list SHOULD include all of the parameters tha
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueSetExpansionParameter)
  parameter?: ValueSetExpansionParameter[];

  /**
   * This SHOULD be a fully populated instant, but in some circumstances, value sets are expanded by hand, and the expansion 
   */
  @IsOptional()
  @IsString()
  timestamp?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _timestamp?: Element;

  /**
   * Paging only applies to flat expansions.
   */
  @IsOptional()
  @IsNumber()
  total?: number;

  /**
   * Constructor for ValueSetExpansion
   */
  constructor(source: Partial<ValueSetExpansion> = {}) {
    super(source);
  }
}
