import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Identifier } from '../elements/Identifier';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceNucleicAcidSubunitLinkage extends BackboneElement implements fhir.SubstanceNucleicAcidSubunitLinkage {
  /**
   * The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic aci
   */
  @IsOptional()
  @IsString()
  connectivity?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _connectivity?: Element;

  /**
   * Each linkage will be registered as a fragment and have an ID.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkag
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Residues shall be captured as described in 5.3.6.8.3.
   */
  @IsOptional()
  @IsString()
  residueSite?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _residueSite?: Element;

  /**
   * Constructor for SubstanceNucleicAcidSubunitLinkage
   */
  constructor(source: Partial<SubstanceNucleicAcidSubunitLinkage> = {}) {
    super(source);
  }
}
