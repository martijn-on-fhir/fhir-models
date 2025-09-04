import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ConsentProvisionData extends BackboneElement {
  /**
   * How the resource reference is interpreted when testing consent restrictions.
   */
  @IsOptional()
  @IsIn(['instance', 'related', 'dependents', 'authoredby'])
  meaning?: ('instance'|'related'|'dependents'|'authoredby');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _meaning?: Element;

  /**
   * A reference to a specific resource that defines which resources are covered by this consent.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  reference?: Reference;

  /**
   * Constructor for ConsentProvisionData
   */
  constructor(source: Partial<ConsentProvisionData> = {}) {
    super(source);
  }
}
