import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CompositionAttester extends BackboneElement implements fhir.CompositionAttester {
  /**
   * The type of attestation the authenticator offers.
   */
  @IsOptional()
  @IsIn(['personal', 'professional', 'legal', 'official'])
  mode?: ('personal'|'professional'|'legal'|'official');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _mode?: Element;

  /**
   * Who attested the composition in the specified way.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  party?: Reference;

  /**
   * When the composition was attested by the party.
   */
  @IsOptional()
  @IsString()
  time?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _time?: Element;

  /**
   * Constructor for CompositionAttester
   */
  constructor(source: Partial<CompositionAttester> = {}) {
    super(source);
  }
}
