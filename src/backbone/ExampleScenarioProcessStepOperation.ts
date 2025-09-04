import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ExampleScenarioInstanceContainedInstance } from './ExampleScenarioInstanceContainedInstance';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ExampleScenarioProcessStepOperation extends BackboneElement implements fhir.ExampleScenarioProcessStepOperation {
  /**
   * A comment to be inserted in the diagram.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Who starts the transaction.
   */
  @IsOptional()
  @IsString()
  initiator?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _initiator?: Element;

  /**
   * Whether the initiator is deactivated right after the transaction.
   */
  @IsOptional()
  @IsBoolean()
  initiatorActive?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _initiatorActive?: Element;

  /**
   * The human-friendly name of the interaction.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * The sequential number of the interaction, e.g. 1.2.5.
   */
  @IsOptional()
  @IsString()
  number?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _number?: Element;

  /**
   * Who receives the transaction.
   */
  @IsOptional()
  @IsString()
  receiver?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _receiver?: Element;

  /**
   * Whether the receiver is deactivated right after the transaction.
   */
  @IsOptional()
  @IsBoolean()
  receiverActive?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _receiverActive?: Element;

  /**
   * Each resource instance used by the initiator.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ExampleScenarioInstanceContainedInstance)
  request?: ExampleScenarioInstanceContainedInstance;

  /**
   * Each resource instance used by the responder.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ExampleScenarioInstanceContainedInstance)
  response?: ExampleScenarioInstanceContainedInstance;

  /**
   * The type of operation - CRUD.
   */
  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for ExampleScenarioProcessStepOperation
   */
  constructor(source: Partial<ExampleScenarioProcessStepOperation> = {}) {
    super(source);
  }
}
