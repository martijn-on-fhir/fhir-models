import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImplementationGuideDefinitionPage extends BackboneElement {
  /**
   * A code that indicates how the page is generated.
   */
  @IsOptional()
  @IsIn(['html', 'markdown', 'xml', 'generated'])
  generation?: ('html'|'markdown'|'xml'|'generated');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _generation?: Element;

  /**
   * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (so
   */
  @IsOptional()
  @IsString()
  nameUrl?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _nameUrl?: Element;

  /**
   * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (so
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  nameReference?: Reference;

  /**
   * The implementation guide breadcrumbs are generated from this structure.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImplementationGuideDefinitionPage)
  page?: ImplementationGuideDefinitionPage[];

  /**
   * A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
   */
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _title?: Element;

  /**
   * Constructor for ImplementationGuideDefinitionPage
   */
  constructor(source: Partial<ImplementationGuideDefinitionPage> = {}) {
    super(source);
  }
}
