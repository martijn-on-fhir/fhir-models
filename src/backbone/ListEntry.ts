import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ListEntry extends BackboneElement {
  /**
   * When this item was added to the list.
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Both flag a
   */
  @IsOptional()
  @IsBoolean()
  deleted?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _deleted?: Element;

  /**
   * The flag can only be understood in the context of the List.code. If the flag means that the entry has actually been dele
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  flag?: CodeableConcept;

  /**
   * A reference to the actual resource from which data was derived.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  item?: Reference;

  /**
   * Constructor for ListEntry
   */
  constructor(source: Partial<ListEntry> = {}) {
    super(source);
  }
}
