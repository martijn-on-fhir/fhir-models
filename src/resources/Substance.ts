import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { SubstanceIngredient } from '../backbone/SubstanceIngredient';
import { SubstanceInstance } from '../backbone/SubstanceInstance';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Substance extends DomainResource implements fhir.Substance {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Substance' as const;

  /**
   * The level of granularity is defined by the category concepts in the value set.   More fine-grained filtering can be perf
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /**
   * This could be a reference to an externally defined code.  It could also be a locally assigned code (e.g. a formulary),  
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * A description of the substance - its appearance, handling requirements, and other usage notes.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * This identifier is associated with the kind of substance in contrast to the  Substance.instance.identifier which is asso
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * A substance can be composed of other substances.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceIngredient)
  ingredient?: SubstanceIngredient[];

  /**
   * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceInstance)
  instance?: SubstanceInstance[];

  /**
   * A code to indicate if the substance is actively used.
   */
  @IsOptional()
  @IsIn(['active', 'inactive', 'entered-in-error'])
  status?: ('active'|'inactive'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Constructor for Substance
   */
  constructor(source: Partial<Substance> = {}) {
    super(source);
    this.resourceType = 'Substance';
  }
}
