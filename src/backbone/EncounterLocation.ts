import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class EncounterLocation extends BackboneElement {
  /**
   * The location where the encounter takes place.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /**
   * Time period during which the patient was present at the location.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * This information is de-normalized from the Location resource to support the easier understanding of the encounter resour
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  physicalType?: CodeableConcept;

  /**
   * When the patient is no longer active at a location, then the period end date is entered, and the status may be changed t
   */
  @IsOptional()
  @IsIn(['planned', 'active', 'reserved', 'completed'])
  status?: ('planned'|'active'|'reserved'|'completed');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Constructor for EncounterLocation
   */
  constructor(source: Partial<EncounterLocation> = {}) {
    super(source);
  }
}
