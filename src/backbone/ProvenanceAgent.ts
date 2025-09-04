import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ProvenanceAgent extends BackboneElement {
  /**
   * onBehalfOfIdentity should be used when the agent is not a Resource type.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  onBehalfOf?: Reference;

  /**
   * For example: doctor, nurse, clerk, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  role?: CodeableConcept[];

  /**
   * For example: author, performer, enterer, attester, etc.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * whoIdentity should be used when the agent is not a Resource type.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  who?: Reference;

  /**
   * Constructor for ProvenanceAgent
   */
  constructor(source: Partial<ProvenanceAgent> = {}) {
    super(source);
  }
}
