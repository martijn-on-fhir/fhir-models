import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ConceptMapGroupElementTargetDependsOn extends BackboneElement {
  /**
   * The display is ignored when processing the map.
   */
  @IsOptional()
  @IsString()
  display?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _display?: Element;

  /**
   * A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the info
   */
  @IsOptional()
  @IsString()
  property?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _property?: Element;

  /**
   * An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that cro
   */
  @IsOptional()
  @IsString()
  system?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _system?: Element;

  /**
   * Identity (code or path) or the element/item/ValueSet/text that the map depends on / refers to.
   */
  @IsOptional()
  @IsString()
  value?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _value?: Element;

  /**
   * Constructor for ConceptMapGroupElementTargetDependsOn
   */
  constructor(source: Partial<ConceptMapGroupElementTargetDependsOn> = {}) {
    super(source);
  }
}
