import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ConceptMapGroup } from '../backbone/ConceptMapGroup';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { UsageContext } from '../elements/UsageContext';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ConceptMap extends DomainResource implements fhir.ConceptMap {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'ConceptMap' as const;

  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * Frequently the copyright differs between the concept map and codes that are included. The copyright statement should cle
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
   * The description is not intended to describe the semantics of the concept map. The description should capture its intende
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Allows filtering of concept maps that are appropriate for use versus not.
   */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _experimental?: Element;

  /**
   * A group of mappings that all have the same source and target system.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConceptMapGroup)
  group?: ConceptMapGroup[];

  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identi
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * It may be possible for the concept map to be used in jurisdictions other than those for which it was originally designed
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

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
   * Usually an organization but may be an individual. The publisher (or steward) of the concept map is the organization or i
   */
  @IsOptional()
  @IsString()
  publisher?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _publisher?: Element;

  /**
   * This element does not describe the usage of the concept map. Instead, it provides traceability of ''why'' the resource i
   */
  @IsOptional()
  @IsString()
  purpose?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _purpose?: Element;

  /**
   * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, there is no 
   */
  @IsOptional()
  @IsString()
  sourceUri?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _sourceUri?: Element;

  /**
   * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, there is no 
   */
  @IsOptional()
  @IsString()
  sourceCanonical?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _sourceCanonical?: Element;

  /**
   * Allows filtering of concept maps that are appropriate for use versus not.
   */
  @IsOptional()
  @IsIn(['draft', 'active', 'retired', 'unknown'])
  status?: ('draft'|'active'|'retired'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no sp
   */
  @IsOptional()
  @IsString()
  targetUri?: string;

  /**
   * Constructor for ConceptMap
   */
  constructor(source: Partial<ConceptMap> = {}) {
    super(source);
    this.resourceType = 'ConceptMap';
  }
}
