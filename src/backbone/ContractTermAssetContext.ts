import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ContractTermAssetContext extends BackboneElement implements fhir.ContractTermAssetContext {
  /**
   * Coded representation of the context generally or of the Referenced entity, such as the asset holder type or location.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  code?: CodeableConcept[];

  /**
   * Asset context reference may include the creator, custodian, or owning Person or Organization (e.g., bank, repository),  
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  reference?: Reference;

  /**
   * Context description.
   */
  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _text?: Element;

  /**
   * Constructor for ContractTermAssetContext
   */
  constructor(source: Partial<ContractTermAssetContext> = {}) {
    super(source);
  }
}
