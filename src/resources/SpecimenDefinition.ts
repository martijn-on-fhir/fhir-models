import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { SpecimenDefinitionTypeTested } from '../backbone/SpecimenDefinitionTypeTested';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SpecimenDefinition extends DomainResource implements fhir.SpecimenDefinition {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'SpecimenDefinition' as const;

  /**
   * The action to be performed for collecting the specimen.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  collection?: CodeableConcept[];

  /**
   * A business identifier associated with the kind of specimen.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * Preparation of the patient for specimen collection.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  patientPreparation?: CodeableConcept[];

  /**
   * Time aspect of specimen collection (duration or offset).
   */
  @IsOptional()
  @IsString()
  timeAspect?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _timeAspect?: Element;

  /**
   * The kind of material to be collected.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  typeCollected?: CodeableConcept;

  /**
   * Specimen conditioned in a container as expected by the testing laboratory.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SpecimenDefinitionTypeTested)
  typeTested?: SpecimenDefinitionTypeTested[];

  /**
   * Constructor for SpecimenDefinition
   */
  constructor(source: Partial<SpecimenDefinition> = {}) {
    super(source);
    this.resourceType = 'SpecimenDefinition';
  }
}
