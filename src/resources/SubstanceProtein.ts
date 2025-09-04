import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { SubstanceProteinSubunit } from '../backbone/SubstanceProteinSubunit';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceProtein extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'SubstanceProtein' as const;

  /**
   * The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be descr
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  disulfideLinkage?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _disulfideLinkage?: Element[];

  /**
   * Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the Substanc
   */
  @IsOptional()
  @IsNumber()
  numberOfSubunits?: number;

  /**
   * The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  sequenceType?: CodeableConcept;

  /**
   * This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequen
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceProteinSubunit)
  subunit?: SubstanceProteinSubunit[];

  /**
   * Constructor for SubstanceProtein
   */
  constructor(source: Partial<SubstanceProtein> = {}) {
    super(source);
    this.resourceType = 'SubstanceProtein';
  }
}
