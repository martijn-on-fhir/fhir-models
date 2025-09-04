import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
import { SubstanceSpecificationNameOfficial } from './SubstanceSpecificationNameOfficial';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceSpecificationName extends BackboneElement implements fhir.SubstanceSpecificationName {
  /**
   * The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colo
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  domain?: CodeableConcept[];

  /**
   * The jurisdiction where this name applies.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /**
   * Language of the name.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  language?: CodeableConcept[];

  /**
   * The actual name.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Details of the official nature of this name.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationNameOfficial)
  official?: SubstanceSpecificationNameOfficial[];

  /**
   * If this is the preferred name for this substance.
   */
  @IsOptional()
  @IsBoolean()
  preferred?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _preferred?: Element;

  /**
   * Supporting literature.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  source?: Reference[];

  /**
   * The status of the name.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  status?: CodeableConcept;

  /**
   * A synonym of this name.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationName)
  synonym?: SubstanceSpecificationName[];

  /**
   * A translation for this name.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationName)
  translation?: SubstanceSpecificationName[];

  /**
   * Name type.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for SubstanceSpecificationName
   */
  constructor(source: Partial<SubstanceSpecificationName> = {}) {
    super(source);
  }
}
