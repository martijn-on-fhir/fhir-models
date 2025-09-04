import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CapabilityStatementRestResourceInteraction extends BackboneElement {
  /**
   * Coded identifier of the operation, supported by the system resource.
   */
  @IsOptional()
  @IsIn(['read', 'vread', 'update', 'patch', 'delete', 'history-instance', 'history-type', 'create', 'search-type'])
  code?: ('read'|'vread'|'update'|'patch'|'delete'|'history-instance'|'history-type'|'create'|'search-type');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * Guidance specific to the implementation of this operation, such as 'delete is a logical delete' or 'updates are only all
   */
  @IsOptional()
  @IsString()
  documentation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _documentation?: Element;

  /**
   * Constructor for CapabilityStatementRestResourceInteraction
   */
  constructor(source: Partial<CapabilityStatementRestResourceInteraction> = {}) {
    super(source);
  }
}
