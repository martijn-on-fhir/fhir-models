import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { SubstancePolymerMonomerSet } from '../backbone/SubstancePolymerMonomerSet';
import { SubstancePolymerRepeat } from '../backbone/SubstancePolymerRepeat';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstancePolymer extends DomainResource implements fhir.SubstancePolymer {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'SubstancePolymer' as const;

  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  class?: CodeableConcept;

  /**
   * Todo.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  copolymerConnectivity?: CodeableConcept[];

  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  geometry?: CodeableConcept;

  /**
   * Todo.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  modification?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _modification?: Element[];

  /**
   * Todo.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstancePolymerMonomerSet)
  monomerSet?: SubstancePolymerMonomerSet[];

  /**
   * Todo.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstancePolymerRepeat)
  repeat?: SubstancePolymerRepeat[];

  /**
   * Constructor for SubstancePolymer
   */
  constructor(source: Partial<SubstancePolymer> = {}) {
    super(source);
    this.resourceType = 'SubstancePolymer';
  }
}
