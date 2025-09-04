import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { ImplementationGuideDefinition } from '../backbone/ImplementationGuideDefinition';
import { ImplementationGuideDependsOn } from '../backbone/ImplementationGuideDependsOn';
import { ImplementationGuideGlobal } from '../backbone/ImplementationGuideGlobal';
import { ImplementationGuideManifest } from '../backbone/ImplementationGuideManifest';
import { UsageContext } from '../elements/UsageContext';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImplementationGuide extends DomainResource implements fhir.ImplementationGuide {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'ImplementationGuide' as const;

  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal
   */
  @IsOptional()
  @IsString()
  copyright?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _copyright?: Element;

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
   * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ImplementationGuideDefinition)
  definition?: ImplementationGuideDefinition;

  /**
   * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, pr
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImplementationGuideDependsOn)
  dependsOn?: ImplementationGuideDependsOn[];

  /**
   * This description can be used to capture details such as why the implementation guide was built, comments about misuse, i
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Allows filtering of implementation guides that are appropriate for use versus not.
   */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _experimental?: Element;

  /**
   * Most implementation guides target a single version - e.g. they describe how to use a particular version, and the profile
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
   * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an impleme
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImplementationGuideGlobal)
  global?: ImplementationGuideGlobal[];

  /**
   * It may be possible for the implementation guide to be used in jurisdictions other than those for which it was originally
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /**
   * The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'.
   */
  @IsOptional()
  @IsString()
  license?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _license?: Element;

  /**
   * Information about an assembled implementation guide, created by the publication tooling.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ImplementationGuideManifest)
  manifest?: ImplementationGuideManifest;

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
   * Many (if not all) IG publishing tools will require that this element be present. For implementation guides published thr
   */
  @IsOptional()
  @IsString()
  packageId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _packageId?: Element;

  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the implementation guide is the organiza
   */
  @IsOptional()
  @IsString()
  publisher?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _publisher?: Element;

  /**
   * Allows filtering of implementation guides that are appropriate for use versus not.
   */
  @IsOptional()
  @IsIn(['draft', 'active', 'retired', 'unknown'])
  status?: ('draft'|'active'|'retired'|'unknown');

  /**
   * Constructor for ImplementationGuide
   */
  constructor(source: Partial<ImplementationGuide> = {}) {
    super(source);
    this.resourceType = 'ImplementationGuide';
  }
}
