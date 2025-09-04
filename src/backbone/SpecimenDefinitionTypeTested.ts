import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Duration } from '../elements/Duration';
import { SpecimenDefinitionTypeTestedContainer } from './SpecimenDefinitionTypeTestedContainer';
import { SpecimenDefinitionTypeTestedHandling } from './SpecimenDefinitionTypeTestedHandling';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SpecimenDefinitionTypeTested extends BackboneElement implements fhir.SpecimenDefinitionTypeTested {
  /**
   * The specimen's container.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => SpecimenDefinitionTypeTestedContainer)
  container?: SpecimenDefinitionTypeTestedContainer;

  /**
   * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing proc
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SpecimenDefinitionTypeTestedHandling)
  handling?: SpecimenDefinitionTypeTestedHandling[];

  /**
   * Primary of secondary specimen.
   */
  @IsOptional()
  @IsBoolean()
  isDerived?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _isDerived?: Element;

  /**
   * The preference for this type of conditioned specimen.
   */
  @IsOptional()
  @IsIn(['preferred', 'alternate'])
  preference?: ('preferred'|'alternate');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _preference?: Element;

  /**
   * Criterion for rejection of the specimen in its container by the laboratory.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  rejectionCriterion?: CodeableConcept[];

  /**
   * Requirements for delivery and special handling of this kind of conditioned specimen.
   */
  @IsOptional()
  @IsString()
  requirement?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _requirement?: Element;

  /**
   * The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additi
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  retentionTime?: Duration;

  /**
   * The kind of specimen conditioned for testing expected by lab.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for SpecimenDefinitionTypeTested
   */
  constructor(source: Partial<SpecimenDefinitionTypeTested> = {}) {
    super(source);
  }
}
