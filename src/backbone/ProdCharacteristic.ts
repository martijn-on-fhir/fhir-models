import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ProdCharacteristic extends BackboneElement implements fhir.ProdCharacteristic {
  /**
   * Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term id
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  color?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _color?: Element[];

  /**
   * Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  depth?: Quantity;

  /**
   * Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  externalDiameter?: Quantity;

  /**
   * Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measuremen
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  height?: Quantity;

  /**
   * Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementa
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Attachment)
  image?: Attachment[];

  /**
   * Where applicable, the imprint can be specified as text.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  imprint?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _imprint?: Element[];

  /**
   * Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of me
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  nominalVolume?: Quantity;

  /**
   * Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  scoring?: CodeableConcept;

  /**
   * Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term id
   */
  @IsOptional()
  @IsString()
  shape?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _shape?: Element;

  /**
   * Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measuremen
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  weight?: Quantity;

  /**
   * Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  width?: Quantity;

  /**
   * Constructor for ProdCharacteristic
   */
  constructor(source: Partial<ProdCharacteristic> = {}) {
    super(source);
  }
}
