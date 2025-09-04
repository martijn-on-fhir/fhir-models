import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Resource } from '../base/Resource';
import { ParametersParameter } from '../backbone/ParametersParameter';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Parameters extends Resource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Parameters' as const;

  /**
   * A parameter passed to or received from the operation.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ParametersParameter)
  parameter?: ParametersParameter[];

  /**
   * Constructor for Parameters
   */
  constructor(source: Partial<Parameters> = {}) {
    super(source);
    this.resourceType = 'Parameters';
  }
}
