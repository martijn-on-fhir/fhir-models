import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ProvenanceAgent } from './ProvenanceAgent';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ProvenanceEntity extends BackboneElement implements fhir.ProvenanceEntity {
  /**
   * A usecase where one Provenance.entity.agent is used where the Entity that was used in the creation/updating of the Targe
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProvenanceAgent)
  agent?: ProvenanceAgent[];

  /**
   * How the entity was used during the activity.
   */
  @IsOptional()
  @IsIn(['derivation', 'revision', 'quotation', 'source', 'removal'])
  role?: ('derivation'|'revision'|'quotation'|'source'|'removal');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _role?: Element;

  /**
   * whatIdentity should be used for entities that are not a Resource type.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  what?: Reference;

  /**
   * Constructor for ProvenanceEntity
   */
  constructor(source: Partial<ProvenanceEntity> = {}) {
    super(source);
  }
}
