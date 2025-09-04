import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { GraphDefinitionLink } from './GraphDefinitionLink';
import { GraphDefinitionLinkTargetCompartment } from './GraphDefinitionLinkTargetCompartment';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class GraphDefinitionLinkTarget extends BackboneElement implements fhir.GraphDefinitionLinkTarget {
  /**
   * Compartment Consistency Rules.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GraphDefinitionLinkTargetCompartment)
  compartment?: GraphDefinitionLinkTargetCompartment[];

  /**
   * Additional links from target resource.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GraphDefinitionLink)
  link?: GraphDefinitionLink[];

  /**
   * At least one of the parameters must have the value {ref} which identifies the focus resource.
   */
  @IsOptional()
  @IsString()
  params?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _params?: Element;

  /**
   * Profile for the target resource.
   */
  @IsOptional()
  @IsString()
  profile?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _profile?: Element;

  /**
   * Type of resource this link refers to.
   */
  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for GraphDefinitionLinkTarget
   */
  constructor(source: Partial<GraphDefinitionLinkTarget> = {}) {
    super(source);
  }
}
