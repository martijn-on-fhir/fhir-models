import 'reflect-metadata';
import { IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Resource } from './Resource';
import { Element } from './Element';
import { Extension } from '../elements/Extension';
import { Narrative } from '../elements/Narrative';

/**
 * A resource that includes narrative, extensions, and contained resources.
 */
export abstract class DomainResource extends Resource {
  /**
   * This should never be done when the content can be identified properly, as once 
   * identification is lost, it is extremely difficult (and context dependent) to restore 
   * it again. Contained resources may have profiles and tags In their meta elements, but 
   * SHALL NOT have security labels.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Resource)
  contained?: any[]; // Using any[] to avoid circular dependency for now

  /**
   * There can be no stigma associated with the use of extensions by any application, 
   * project, or standard - regardless of the institution or jurisdiction that uses 
   * or defines the extensions. The use of extensions is what allows the FHIR 
   * specification to retain a core level of simplicity for everyone.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Extension)
  extension?: Extension[];

  /**
   * There can be no stigma associated with the use of extensions by any application, 
   * project, or standard - regardless of the institution or jurisdiction that uses 
   * or defines the extensions. The use of extensions is what allows the FHIR 
   * specification to retain a core level of simplicity for everyone.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Extension)
  modifierExtension?: Extension[];

  /**
   * A human-readable narrative that contains a summary of the resource and can be used 
   * to represent the content of the resource to a human. The narrative need not encode 
   * all the structured data, but is required to contain sufficient detail to make it 
   * "clinically safe" for a human to just read the narrative. Resource definitions may 
   * define what content should be represented in the narrative to ensure clinical safety.
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
  }
}

