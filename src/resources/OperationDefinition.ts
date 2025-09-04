import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { OperationDefinitionOverload } from '../backbone/OperationDefinitionOverload';
import { OperationDefinitionParameter } from '../backbone/OperationDefinitionParameter';
import { UsageContext } from '../elements/UsageContext';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class OperationDefinition extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'OperationDefinition' as const;

  /**
   * What http methods can be used for the operation depends on the .affectsState value and whether the input parameters are 
   */
  @IsOptional()
  @IsBoolean()
  affectsState?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _affectsState?: Element;

  /**
   * A constrained profile can make optional parameters required or not used and clarify documentation.
   */
  @IsOptional()
  @IsString()
  base?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _base?: Element;

  /**
   * The name used to invoke the operation.
   */
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * Additional information about how to use this operation or named query.
   */
  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _comment?: Element;

  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation 
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * This description can be used to capture details such as why the operation definition was built, comments about misuse, i
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Allows filtering of operation definitions that are appropriate for use versus not.
   */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _experimental?: Element;

  /**
   * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min 
   */
  @IsOptional()
  @IsString()
  inputProfile?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _inputProfile?: Element;

  /**
   * Indicates whether this operation can be invoked on a particular instance of one of the given types.
   */
  @IsOptional()
  @IsBoolean()
  instance?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _instance?: Element;

  /**
   * It may be possible for the operation definition to be used in jurisdictions other than those for which it was originally
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /**
   * Named queries are invoked differently, and have different capabilities.
   */
  @IsOptional()
  @IsIn(['operation', 'query'])
  kind?: ('operation'|'query');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _kind?: Element;

  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is 
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min 
   */
  @IsOptional()
  @IsString()
  outputProfile?: string;

  /**
   * Constructor for OperationDefinition
   */
  constructor(source: Partial<OperationDefinition> = {}) {
    super(source);
    this.resourceType = 'OperationDefinition';
  }
}
