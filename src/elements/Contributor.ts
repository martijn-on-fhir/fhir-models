import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import { ContactDetail } from './ContactDetail';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiti
 */
export class Contributor extends Element implements fhir.Contributor {
  /**
   * Contact details to assist a user in finding and communicating with the contributor.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * The name of the individual or organization responsible for the contribution.
   */
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * The type of contributor.
   */
  @IsOptional()
  @IsIn(['author', 'editor', 'reviewer', 'endorser'])
  type: ('author'|'editor'|'reviewer'|'endorser');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for Contributor
   */
  constructor(source: Partial<Contributor> = {}) {
    super(source);
  }
}
