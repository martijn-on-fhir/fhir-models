import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MolecularSequenceRepository extends BackboneElement implements fhir.MolecularSequenceRepository {
  /**
   * Id of the variant in this external repository. The server will understand how to use this id to call for more info about
   */
  @IsOptional()
  @IsString()
  datasetId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _datasetId?: Element;

  /**
   * URI of an external repository which contains further details about the genetics data.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Id of the read in this external repository.
   */
  @IsOptional()
  @IsString()
  readsetId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _readsetId?: Element;

  /**
   * Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.
   */
  @IsOptional()
  @IsIn(['directlink', 'openapi', 'login', 'oauth', 'other'])
  type?: ('directlink'|'openapi'|'login'|'oauth'|'other');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * URI of an external repository which contains further details about the genetics data.
   */
  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _url?: Element;

  /**
   * Id of the variantset in this external repository. The server will understand how to use this id to call for more info ab
   */
  @IsOptional()
  @IsString()
  variantsetId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _variantsetId?: Element;

  /**
   * Constructor for MolecularSequenceRepository
   */
  constructor(source: Partial<MolecularSequenceRepository> = {}) {
    super(source);
  }
}
