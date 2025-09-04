import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ObservationDefinitionQuantitativeDetails extends BackboneElement implements fhir.ObservationDefinitionQuantitativeDetails {
  /**
   * Factor for converting value expressed with SI unit to value expressed with customary unit.
   */
  @IsOptional()
  @IsNumber()
  conversionFactor?: number;

  /**
   * Customary unit used to report quantitative results of observations conforming to this ObservationDefinition.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  customaryUnit?: CodeableConcept;

  /**
   * Number of digits after decimal separator when the results of such observations are of type Quantity.
   */
  @IsOptional()
  @IsNumber()
  decimalPrecision?: number;

  /**
   * SI unit used to report quantitative results of observations conforming to this ObservationDefinition.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  unit?: CodeableConcept;

  /**
   * Constructor for ObservationDefinitionQuantitativeDetails
   */
  constructor(source: Partial<ObservationDefinitionQuantitativeDetails> = {}) {
    super(source);
  }
}
