import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { StructureMapGroup } from '../backbone/StructureMapGroup';
import { StructureMapStructure } from '../backbone/StructureMapStructure';
import { UsageContext } from '../elements/UsageContext';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class StructureMap extends DomainResource implements fhir.StructureMap {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'StructureMap' as const;

  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * A copyright statement relating to the structure map and/or its contents. Copyright statements are generally legal restri
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
   * This description can be used to capture details such as why the structure map was built, comments about misuse, instruct
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Allows filtering of structure maps that are appropriate for use versus not.
   */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _experimental?: Element;

  /**
   * Organizes the mapping into manageable chunks for human review/ease of maintenance.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureMapGroup)
  group?: StructureMapGroup[];

  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identi
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Other maps used by this map (canonical URLs).
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  import?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _import?: Element[];

  /**
   * It may be possible for the structure map to be used in jurisdictions other than those for which it was originally design
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
   * Usually an organization but may be an individual. The publisher (or steward) of the structure map is the organization or
   */
  @IsOptional()
  @IsString()
  publisher?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _publisher?: Element;

  /**
   * This element does not describe the usage of the structure map. Instead, it provides traceability of ''why'' the resource
   */
  @IsOptional()
  @IsString()
  purpose?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _purpose?: Element;

  /**
   * Allows filtering of structure maps that are appropriate for use versus not.
   */
  @IsOptional()
  @IsIn(['draft', 'active', 'retired', 'unknown'])
  status?: ('draft'|'active'|'retired'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its u
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureMapStructure)
  structure?: StructureMapStructure[];

  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _title?: Element;

  /**
   * Constructor for StructureMap
   */
  constructor(source: Partial<StructureMap> = {}) {
    super(source);
    this.resourceType = 'StructureMap';
  }
}
