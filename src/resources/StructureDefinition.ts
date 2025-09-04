import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { StructureDefinitionContext } from '../backbone/StructureDefinitionContext';
import { StructureDefinitionDifferential } from '../backbone/StructureDefinitionDifferential';
import { StructureDefinitionMapping } from '../backbone/StructureDefinitionMapping';
import { StructureDefinitionSnapshot } from '../backbone/StructureDefinitionSnapshot';
import { UsageContext } from '../elements/UsageContext';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class StructureDefinition extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'StructureDefinition' as const;

  /**
   * Abstract Resources cannot be instantiated - a concrete sub-type must be used. Abstract datatypes and extensions cannot b
   */
  @IsOptional()
  @IsBoolean()
  abstract?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _abstract?: Element;

  /**
   * If differential constraints are specified in this structure, they are applied to the base in a "differential" fashion. I
   */
  @IsOptional()
  @IsString()
  baseDefinition?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _baseDefinition?: Element;

  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * Identifies the types of resource or data type elements to which the extension can be applied.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureDefinitionContext)
  context?: StructureDefinitionContext[];

  /**
   * The rules are only evaluated when the extension is present. When evaluating the invariant, the FHIRPath focus is the ele
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  contextInvariant?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _contextInvariant?: Element[];

  /**
   * A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal
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
   * If the definition is a specialization, then it adds new elements in the differential, and the snapshot includes the inhe
   */
  @IsOptional()
  @IsIn(['specialization', 'constraint'])
  derivation?: ('specialization'|'constraint');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _derivation?: Element;

  /**
   * This description can be used to capture details such as why the structure definition was built, comments about misuse, i
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => StructureDefinitionDifferential)
  differential?: StructureDefinitionDifferential;

  /**
   * Allows filtering of structure definitions that are appropriate for use versus not.
   */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _experimental?: Element;

  /**
   * A StructureDefinition does not need to specify the target it applies to as StructureDefinitions will often be valid acro
   */
  @IsOptional()
  @IsString()
  fhirVersion?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _fhirVersion?: Element;

  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identi
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * It may be possible for the structure definition to be used in jurisdictions other than those for which it was originally
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /**
   * A set of key words or terms from external terminologies that may be used to assist with indexing and searching of templa
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  keyword?: Coding[];

  /**
   * Defines the kind of structure that this definition is describing.
   */
  @IsOptional()
  @IsIn(['primitive-type', 'complex-type', 'resource', 'logical'])
  kind?: ('primitive-type'|'complex-type'|'resource'|'logical');

  /**
   * Constructor for StructureDefinition
   */
  constructor(source: Partial<StructureDefinition> = {}) {
    super(source);
    this.resourceType = 'StructureDefinition';
  }
}
