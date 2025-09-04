import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductAuthorizationProcedure extends BackboneElement {
  /**
   * Applcations submitted to obtain a marketing authorization.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductAuthorizationProcedure)
  application?: MedicinalProductAuthorizationProcedure[];

  /**
   * Date of procedure.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  datePeriod?: Period;

  /**
   * Date of procedure.
   */
  @IsOptional()
  @IsString()
  dateDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _dateDateTime?: Element;

  /**
   * Identifier for this procedure.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * Type of procedure.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for MedicinalProductAuthorizationProcedure
   */
  constructor(source: Partial<MedicinalProductAuthorizationProcedure> = {}) {
    super(source);
  }
}
