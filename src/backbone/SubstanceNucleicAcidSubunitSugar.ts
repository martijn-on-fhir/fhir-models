import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Identifier } from '../elements/Identifier';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceNucleicAcidSubunitSugar extends BackboneElement {
  /**
   * The Substance ID of the sugar or sugar-like component that make up the nucleotide.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * The name of the sugar or sugar-like component that make up the nucleotide.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direc
   */
  @IsOptional()
  @IsString()
  residueSite?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _residueSite?: Element;

  /**
   * Constructor for SubstanceNucleicAcidSubunitSugar
   */
  constructor(source: Partial<SubstanceNucleicAcidSubunitSugar> = {}) {
    super(source);
  }
}
