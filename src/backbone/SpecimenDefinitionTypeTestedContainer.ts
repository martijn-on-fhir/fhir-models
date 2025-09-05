import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { SpecimenDefinitionTypeTestedContainerAdditive } from './SpecimenDefinitionTypeTestedContainerAdditive';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SpecimenDefinitionTypeTestedContainer extends BackboneElement {
  /**
   * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SpecimenDefinitionTypeTestedContainerAdditive)
  additive?: SpecimenDefinitionTypeTestedContainerAdditive[];

  /**
   * Color of container cap.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  cap?: CodeableConcept;

  /**
   * The capacity (volume or other measure) of this kind of container.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  capacity?: Quantity;

  /**
   * The textual description of the kind of container.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * The type of material of the container.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  material?: CodeableConcept;

  /**
   * The minimum volume to be conditioned in the container.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  minimumVolumeQuantity?: Quantity;

  /**
   * The minimum volume to be conditioned in the container.
   */
  @IsOptional()
  @IsString()
  minimumVolumeString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _minimumVolumeString?: Element;

  /**
   * Special processing that should be applied to the container for this kind of specimen.
   */
  @IsOptional()
  @IsString()
  preparation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _preparation?: Element;

  /**
   * The type of container used to contain this kind of specimen.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for SpecimenDefinitionTypeTestedContainer
   */
  constructor(source: Partial<SpecimenDefinitionTypeTestedContainer> = {}) {
    super(source);
  }
}
