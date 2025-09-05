import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class BiologicallyDerivedProductCollection extends BackboneElement {
  /**
   * Time of product collection.
   */
  @IsOptional()
  @IsString()
  collectedDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _collectedDateTime?: Element;

  /**
   * Time of product collection.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  collectedPeriod?: Period;

  /**
   * Healthcare professional who is performing the collection.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  collector?: Reference;

  /**
   * The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providi
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  source?: Reference;

  /**
   * Constructor for BiologicallyDerivedProductCollection
   */
  constructor(source: Partial<BiologicallyDerivedProductCollection> = {}) {
    super(source);
  }
}
