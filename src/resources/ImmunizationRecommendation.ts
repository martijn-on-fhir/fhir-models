import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Identifier } from '../elements/Identifier';
import { ImmunizationRecommendationRecommendation } from '../backbone/ImmunizationRecommendationRecommendation';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImmunizationRecommendation extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'ImmunizationRecommendation' as const;

  /**
   * Indicates the authority who published the protocol (e.g. ACIP).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  authority?: Reference;

  /**
   * The date the immunization recommendation(s) were created.
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * A unique identifier assigned to this particular recommendation record.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The patient the recommendation(s) are for.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /**
   * Vaccine administration recommendations.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImmunizationRecommendationRecommendation)
  recommendation?: ImmunizationRecommendationRecommendation[];

  /**
   * Constructor for ImmunizationRecommendation
   */
  constructor(source: Partial<ImmunizationRecommendation> = {}) {
    super(source);
    this.resourceType = 'ImmunizationRecommendation';
  }
}
