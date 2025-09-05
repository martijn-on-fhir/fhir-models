import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Coding } from '../elements/Coding';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductNameNamePart extends BackboneElement {
  /**
   * A fragment of a product name.
   */
  @IsOptional()
  @IsString()
  part?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _part?: Element;

  /**
   * Idenifying type for this part of the name (e.g. strength part).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  type?: Coding;

  /**
   * Constructor for MedicinalProductNameNamePart
   */
  constructor(source: Partial<MedicinalProductNameNamePart> = {}) {
    super(source);
  }
}
