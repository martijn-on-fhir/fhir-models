import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SpecimenDefinitionTypeTestedContainerAdditive extends BackboneElement {
  /**
   * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  additiveCodeableConcept?: CodeableConcept;

  /**
   * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  additiveReference?: Reference;

  /**
   * Constructor for SpecimenDefinitionTypeTestedContainerAdditive
   */
  constructor(source: Partial<SpecimenDefinitionTypeTestedContainerAdditive> = {}) {
    super(source);
  }
}
