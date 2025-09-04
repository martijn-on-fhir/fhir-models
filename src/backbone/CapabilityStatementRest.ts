import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CapabilityStatementRestInteraction } from './CapabilityStatementRestInteraction';
import { CapabilityStatementRestResource } from './CapabilityStatementRestResource';
import { CapabilityStatementRestResourceOperation } from './CapabilityStatementRestResourceOperation';
import { CapabilityStatementRestResourceSearchParam } from './CapabilityStatementRestResourceSearchParam';
import { CapabilityStatementRestSecurity } from './CapabilityStatementRestSecurity';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CapabilityStatementRest extends BackboneElement implements fhir.CapabilityStatementRest {
  /**
   * At present, the only defined compartments are at [CompartmentDefinition](compartmentdefinition.html).
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  compartment?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _compartment?: Element[];

  /**
   * Information about the system's restful capabilities that apply across all applications, such as security.
   */
  @IsOptional()
  @IsString()
  documentation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _documentation?: Element;

  /**
   * A specification of restful operations supported by the system.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementRestInteraction)
  interaction?: CapabilityStatementRestInteraction[];

  /**
   * Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.
   */
  @IsOptional()
  @IsIn(['client', 'server'])
  mode?: ('client'|'server');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _mode?: Element;

  /**
   * CapabilityStatement.rest.operation is for operations invoked at the system level, or for operations that are supported a
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementRestResourceOperation)
  operation?: CapabilityStatementRestResourceOperation[];

  /**
   * Max of one repetition per resource type.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementRestResource)
  resource?: CapabilityStatementRestResource[];

  /**
   * Typically, the only search parameters supported for all searches are those that apply to all resources - tags, profiles,
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementRestResourceSearchParam)
  searchParam?: CapabilityStatementRestResourceSearchParam[];

  /**
   * Information about security implementation from an interface perspective - what a client needs to know.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CapabilityStatementRestSecurity)
  security?: CapabilityStatementRestSecurity;

  /**
   * Constructor for CapabilityStatementRest
   */
  constructor(source: Partial<CapabilityStatementRest> = {}) {
    super(source);
  }
}
