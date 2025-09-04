import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Attachment } from '../elements/Attachment';
import { Identifier } from '../elements/Identifier';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceProteinSubunit extends BackboneElement implements fhir.SubstanceProteinSubunit {
  /**
   * The modification at the C-terminal shall be specified.
   */
  @IsOptional()
  @IsString()
  cTerminalModification?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _cTerminalModification?: Element;

  /**
   * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  cTerminalModificationId?: Identifier;

  /**
   * Length of linear sequences of amino acids contained in the subunit.
   */
  @IsOptional()
  @IsNumber()
  length?: number;

  /**
   * The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified.
   */
  @IsOptional()
  @IsString()
  nTerminalModification?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _nTerminalModification?: Element;

  /**
   * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  nTerminalModificationId?: Identifier;

  /**
   * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-l
   */
  @IsOptional()
  @IsString()
  sequence?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _sequence?: Element;

  /**
   * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-l
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  sequenceAttachment?: Attachment;

  /**
   * Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the s
   */
  @IsOptional()
  @IsNumber()
  subunit?: number;

  /**
   * Constructor for SubstanceProteinSubunit
   */
  constructor(source: Partial<SubstanceProteinSubunit> = {}) {
    super(source);
  }
}
