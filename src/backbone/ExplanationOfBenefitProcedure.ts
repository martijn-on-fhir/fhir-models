import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ExplanationOfBenefitProcedure extends BackboneElement {
  /**
   * Date and optionally time the procedure was performed.
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * The code or reference to a Procedure resource which identifies the clinical intervention performed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  procedureCodeableConcept?: CodeableConcept;

  /**
   * The code or reference to a Procedure resource which identifies the clinical intervention performed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  procedureReference?: Reference;

  /**
   * A number to uniquely identify procedure entries.
   */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /**
   * When the condition was observed or the relative ranking.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /**
   * Unique Device Identifiers associated with this line item.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  udi?: Reference[];

  /**
   * Constructor for ExplanationOfBenefitProcedure
   */
  constructor(source: Partial<ExplanationOfBenefitProcedure> = {}) {
    super(source);
  }
}
