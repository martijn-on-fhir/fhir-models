import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ImplementationGuideDefinitionGrouping } from './ImplementationGuideDefinitionGrouping';
import { ImplementationGuideDefinitionPage } from './ImplementationGuideDefinitionPage';
import { ImplementationGuideDefinitionParameter } from './ImplementationGuideDefinitionParameter';
import { ImplementationGuideDefinitionResource } from './ImplementationGuideDefinitionResource';
import { ImplementationGuideDefinitionTemplate } from './ImplementationGuideDefinitionTemplate';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImplementationGuideDefinition extends BackboneElement {
  /**
   * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImplementationGuideDefinitionGrouping)
  grouping?: ImplementationGuideDefinitionGrouping[];

  /**
   * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ImplementationGuideDefinitionPage)
  page?: ImplementationGuideDefinitionPage;

  /**
   * Defines how IG is built by tools.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImplementationGuideDefinitionParameter)
  parameter?: ImplementationGuideDefinitionParameter[];

  /**
   * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImplementationGuideDefinitionResource)
  resource?: ImplementationGuideDefinitionResource[];

  /**
   * A template for building resources.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImplementationGuideDefinitionTemplate)
  template?: ImplementationGuideDefinitionTemplate[];

  /**
   * Constructor for ImplementationGuideDefinition
   */
  constructor(source: Partial<ImplementationGuideDefinition> = {}) {
    super(source);
  }
}
