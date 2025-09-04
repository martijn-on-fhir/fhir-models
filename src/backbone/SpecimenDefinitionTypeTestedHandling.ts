import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Duration } from '../elements/Duration';
import { Range } from '../elements/Range';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SpecimenDefinitionTypeTestedHandling extends BackboneElement implements fhir.SpecimenDefinitionTypeTestedHandling {
  /**
   * Additional textual instructions for the preservation or transport of the specimen. For instance, 'Protect from light exp
   */
  @IsOptional()
  @IsString()
  instruction?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _instruction?: Element;

  /**
   * The maximum time interval of preservation of the specimen with these conditions.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  maxDuration?: Duration;

  /**
   * It qualifies the interval of temperature, which characterizes an occurrence of handling. Conditions that are not related
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  temperatureQualifier?: CodeableConcept;

  /**
   * The temperature interval for this set of handling instructions.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  temperatureRange?: Range;

  /**
   * Constructor for SpecimenDefinitionTypeTestedHandling
   */
  constructor(source: Partial<SpecimenDefinitionTypeTestedHandling> = {}) {
    super(source);
  }
}
