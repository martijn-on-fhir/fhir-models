import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Resource } from '../base/Resource';
import { Extension } from '../elements/Extension';
// Resource reference
import { Narrative } from '../elements/Narrative';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DomainResource extends Resource implements fhir.DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'DomainResource' as const;

  /**
   * This should never be done when the content can be identified properly, as once identification is lost, it is extremely d
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FhirResource)
  contained?: any[];

  /**
   * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of th
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Extension)
  extension?: Extension[];

  /**
   * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of th
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Extension)
  modifierExtension?: Extension[];

  /**
   * Contained resources do not have narrative. Resources that are not contained SHOULD have a narrative. In some cases, a re
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Narrative)
  text?: Narrative;

  /**
   * Constructor for DomainResource
   */
  constructor(source: Partial<DomainResource> = {}) {
    super(source);
    this.resourceType = 'DomainResource';
  }
}
