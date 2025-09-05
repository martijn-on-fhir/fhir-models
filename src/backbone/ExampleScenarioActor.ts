import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ExampleScenarioActor extends BackboneElement {
  /**
   * should this be called ID or acronym?
   */
  @IsOptional()
  @IsString()
  actorId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _actorId?: Element;

  /**
   * Cardinality: is name and description 1..1?
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Cardinality: is name and description 1..1?
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * The type of actor - person or system.
   */
  @IsOptional()
  @IsIn(['person', 'entity'])
  type?: ('person'|'entity');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for ExampleScenarioActor
   */
  constructor(source: Partial<ExampleScenarioActor> = {}) {
    super(source);
  }
}
