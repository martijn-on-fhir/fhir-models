import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { ChargeItemDefinitionApplicability } from '../backbone/ChargeItemDefinitionApplicability';
import { ChargeItemDefinitionPropertyGroup } from '../backbone/ChargeItemDefinitionPropertyGroup';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import { UsageContext } from '../elements/UsageContext';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ChargeItemDefinition extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'ChargeItemDefinition' as const;

  /**
   * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChargeItemDefinitionApplicability)
  applicability?: ChargeItemDefinitionApplicability[];

  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  @IsOptional()
  @IsString()
  approvalDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _approvalDate?: Element;

  /**
   * The defined billing details in this resource pertain to the given billing code.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * A copyright statement relating to the charge item definition and/or its contents. Copyright statements are generally leg
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
   * The URL pointing to an externally-defined charge item definition that is adhered to in whole or in part by this definiti
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  derivedFromUri?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _derivedFromUri?: Element[];

  /**
   * This description can be used to capture details such as why the charge item definition was built, comments about misuse,
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * The effective period for a charge item definition  determines when the content is applicable for usage and is independen
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /**
   * Allows filtering of charge item definitions that are appropriate for use versus not.
   */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _experimental?: Element;

  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identi
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * In case of highly customized, individually produced or fitted devices/substances, the pricing information may be differe
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  instance?: Reference[];

  /**
   * It may be possible for the charge item definition to be used in jurisdictions other than those for which it was original
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /**
   * If specified, this date follows the original approval date.
   */
  @IsOptional()
  @IsString()
  lastReviewDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _lastReviewDate?: Element;

  /**
   * A larger definition of which this particular definition is a component or step.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  partOf?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _partOf?: Element[];

  /**
   * Group of properties which are applicable under the same conditions. If no applicability rules are established for the gr
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChargeItemDefinitionPropertyGroup)
  propertyGroup?: ChargeItemDefinitionPropertyGroup[];

  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the charge item definition is the organi
   */
  @IsOptional()
  @IsString()
  publisher?: string;

  /**
   * Constructor for ChargeItemDefinition
   */
  constructor(source: Partial<ChargeItemDefinition> = {}) {
    super(source);
    this.resourceType = 'ChargeItemDefinition';
  }
}
