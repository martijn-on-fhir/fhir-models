import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { SubstanceReferenceInformationClassification } from '../backbone/SubstanceReferenceInformationClassification';
import { SubstanceReferenceInformationGene } from '../backbone/SubstanceReferenceInformationGene';
import { SubstanceReferenceInformationGeneElement } from '../backbone/SubstanceReferenceInformationGeneElement';
import { SubstanceReferenceInformationTarget } from '../backbone/SubstanceReferenceInformationTarget';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceReferenceInformation extends DomainResource implements fhir.SubstanceReferenceInformation {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'SubstanceReferenceInformation' as const;

  /**
   * Todo.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceReferenceInformationClassification)
  classification?: SubstanceReferenceInformationClassification[];

  /**
   * Todo.
   */
  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _comment?: Element;

  /**
   * Todo.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceReferenceInformationGene)
  gene?: SubstanceReferenceInformationGene[];

  /**
   * Todo.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceReferenceInformationGeneElement)
  geneElement?: SubstanceReferenceInformationGeneElement[];

  /**
   * Todo.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceReferenceInformationTarget)
  target?: SubstanceReferenceInformationTarget[];

  /**
   * Constructor for SubstanceReferenceInformation
   */
  constructor(source: Partial<SubstanceReferenceInformation> = {}) {
    super(source);
    this.resourceType = 'SubstanceReferenceInformation';
  }
}
