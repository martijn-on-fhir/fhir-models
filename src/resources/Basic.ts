import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Basic extends DomainResource implements fhir.Basic {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Basic' as const;

  /**
   * Indicates who was responsible for creating the resource instance.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /**
   * Because resource references will only be able to indicate 'Basic', the type of reference will need to be specified in a 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * Identifies when the resource was first created.
   */
  @IsOptional()
  @IsString()
  created?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _created?: Element;

  /**
   * Identifier assigned to the resource for business purposes, outside the context of FHIR.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Optional as not all potential resources will have subjects.  Resources associated with multiple subjects can handle this
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * Constructor for Basic
   */
  constructor(source: Partial<Basic> = {}) {
    super(source);
    this.resourceType = 'Basic';
  }
}
