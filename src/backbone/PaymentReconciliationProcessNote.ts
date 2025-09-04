import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class PaymentReconciliationProcessNote extends BackboneElement implements fhir.PaymentReconciliationProcessNote {
  /**
   * The explanation or description associated with the processing.
   */
  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _text?: Element;

  /**
   * The business purpose of the note text.
   */
  @IsOptional()
  @IsIn(['display', 'print', 'printoper'])
  type?: ('display'|'print'|'printoper');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for PaymentReconciliationProcessNote
   */
  constructor(source: Partial<PaymentReconciliationProcessNote> = {}) {
    super(source);
  }
}
