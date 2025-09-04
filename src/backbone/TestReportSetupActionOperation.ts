import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestReportSetupActionOperation extends BackboneElement {
  /**
   * A link to further details on the result.
   */
  @IsOptional()
  @IsString()
  detail?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _detail?: Element;

  /**
   * An explanatory message associated with the result.
   */
  @IsOptional()
  @IsString()
  message?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _message?: Element;

  /**
   * The result of this operation.
   */
  @IsOptional()
  @IsIn(['pass', 'skip', 'fail', 'warning', 'error'])
  result?: ('pass'|'skip'|'fail'|'warning'|'error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _result?: Element;

  /**
   * Constructor for TestReportSetupActionOperation
   */
  constructor(source: Partial<TestReportSetupActionOperation> = {}) {
    super(source);
  }
}
