import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImplementationGuideDefinitionResource extends BackboneElement {
  /**
   * This is mostly used with examples to explain why it is present (though they can have extensive comments in the examples)
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Examples: * StructureDefinition -> Any * ValueSet -> expansion * OperationDefinition -> Parameters * Questionnaire -> Qu
   */
  @IsOptional()
  @IsBoolean()
  exampleBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _exampleBoolean?: Element;

  /**
   * Examples: * StructureDefinition -> Any * ValueSet -> expansion * OperationDefinition -> Parameters * Questionnaire -> Qu
   */
  @IsOptional()
  @IsString()
  exampleCanonical?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _exampleCanonical?: Element;

  /**
   * The resource SHALL be valid against all the versions it is specified to apply to. If the resource referred to is a Struc
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  fhirVersion?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _fhirVersion?: Element[];

  /**
   * This must correspond to a package.id element within this implementation guide.
   */
  @IsOptional()
  @IsString()
  groupingId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _groupingId?: Element;

  /**
   * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resourc
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementa
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  reference?: Reference;

  /**
   * Constructor for ImplementationGuideDefinitionResource
   */
  constructor(source: Partial<ImplementationGuideDefinitionResource> = {}) {
    super(source);
  }
}
