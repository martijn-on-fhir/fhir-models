import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MedicinalProductInteractionInteractant } from '../backbone/MedicinalProductInteractionInteractant';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductInteraction extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'MedicinalProductInteraction' as const;

  /**
   * The interaction described.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * The effect of the interaction, for example "reduced gastric absorption of primary medication".
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  effect?: CodeableConcept;

  /**
   * The incidence of the interaction, e.g. theoretical, observed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  incidence?: CodeableConcept;

  /**
   * The specific medication, food or laboratory test that interacts.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductInteractionInteractant)
  interactant?: MedicinalProductInteractionInteractant[];

  /**
   * Actions for managing the interaction.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  management?: CodeableConcept;

  /**
   * The medication for which this is a described interaction.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  subject?: Reference[];

  /**
   * The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for MedicinalProductInteraction
   */
  constructor(source: Partial<MedicinalProductInteraction> = {}) {
    super(source);
    this.resourceType = 'MedicinalProductInteraction';
  }
}
