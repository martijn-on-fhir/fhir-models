import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { SubstanceNucleicAcidSubunit } from '../backbone/SubstanceNucleicAcidSubunit';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceNucleicAcid extends DomainResource implements fhir.SubstanceNucleicAcid {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'SubstanceNucleicAcid' as const;

  /**
   * The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with th
   */
  @IsOptional()
  @IsString()
  areaOfHybridisation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _areaOfHybridisation?: Element;

  /**
   * The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be 
   */
  @IsOptional()
  @IsNumber()
  numberOfSubunits?: number;

  /**
   * (TBC).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  oligoNucleotideType?: CodeableConcept;

  /**
   * The type of the sequence shall be specified based on a controlled vocabulary.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  sequenceType?: CodeableConcept;

  /**
   * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; sub
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceNucleicAcidSubunit)
  subunit?: SubstanceNucleicAcidSubunit[];

  /**
   * Constructor for SubstanceNucleicAcid
   */
  constructor(source: Partial<SubstanceNucleicAcid> = {}) {
    super(source);
    this.resourceType = 'SubstanceNucleicAcid';
  }
}
