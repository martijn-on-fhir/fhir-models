import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductSpecialDesignation extends BackboneElement {
  /**
   * Date when the designation was granted.
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * Identifier for the designation, or procedure number.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Condition for which the medicinal use applies.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  indicationCodeableConcept?: CodeableConcept;

  /**
   * Condition for which the medicinal use applies.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  indicationReference?: Reference;

  /**
   * The intended use of the product, e.g. prevention, treatment.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  intendedUse?: CodeableConcept;

  /**
   * Animal species for which this applies.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  species?: CodeableConcept;

  /**
   * For example granted, pending, expired or withdrawn.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  status?: CodeableConcept;

  /**
   * The type of special designation, e.g. orphan drug, minor use.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for MedicinalProductSpecialDesignation
   */
  constructor(source: Partial<MedicinalProductSpecialDesignation> = {}) {
    super(source);
  }
}
