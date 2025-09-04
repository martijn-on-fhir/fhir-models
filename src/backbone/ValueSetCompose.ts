import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ValueSetComposeInclude } from './ValueSetComposeInclude';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ValueSetCompose extends BackboneElement implements fhir.ValueSetCompose {
  /**
   * Usually this is used to selectively exclude codes that were included by subsumption in the inclusions. Any display names
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueSetComposeInclude)
  exclude?: ValueSetComposeInclude[];

  /**
   * Note that in the FHIR terminology framework, "deprecated" does not mean inactive, but in some code systems, e.g. LOINC, 
   */
  @IsOptional()
  @IsBoolean()
  inactive?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _inactive?: Element;

  /**
   * All the conditions in an include must be true. If a system is listed, all the codes from the system are listed. If one o
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueSetComposeInclude)
  include?: ValueSetComposeInclude[];

  /**
   * With a defined lockedDate the value set is considered "Locked". Otherwise, the value set may have different expansions a
   */
  @IsOptional()
  @IsString()
  lockedDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _lockedDate?: Element;

  /**
   * Constructor for ValueSetCompose
   */
  constructor(source: Partial<ValueSetCompose> = {}) {
    super(source);
  }
}
