import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Address } from '../elements/Address';
import { Age } from '../elements/Age';
import { Annotation } from '../elements/Annotation';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { ContactDetail } from '../elements/ContactDetail';
import { ContactPoint } from '../elements/ContactPoint';
import { Contributor } from '../elements/Contributor';
import { Count } from '../elements/Count';
import { DataRequirement } from '../elements/DataRequirement';
import { Distance } from '../elements/Distance';
import { Dosage } from './Dosage';
import { Duration } from '../elements/Duration';
import { Expression } from '../elements/Expression';
import { HumanName } from '../elements/HumanName';
import { Identifier } from '../elements/Identifier';
import { Meta } from '../elements/Meta';
import { Money } from '../elements/Money';
import { ParameterDefinition } from '../elements/ParameterDefinition';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
import { Ratio } from '../elements/Ratio';
import { Reference } from '../elements/Reference';
import { RelatedArtifact } from '../elements/RelatedArtifact';
import { SampledData } from '../elements/SampledData';
import { Signature } from '../elements/Signature';
import { Timing } from './Timing';
import { TriggerDefinition } from '../elements/TriggerDefinition';
import { UsageContext } from '../elements/UsageContext';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class StructureMapGroupRuleSource extends BackboneElement implements fhir.StructureMapGroupRuleSource {
  /**
   * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
   */
  @IsOptional()
  @IsString()
  check?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _check?: Element;

  /**
   * FHIRPath expression  - must be true or the rule does not apply.
   */
  @IsOptional()
  @IsString()
  condition?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _condition?: Element;

  /**
   * Type or variable this rule applies to.
   */
  @IsOptional()
  @IsString()
  context?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _context?: Element;

  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  @IsOptional()
  @IsString()
  defaultValueBase64Binary?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _defaultValueBase64Binary?: Element;

  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  @IsOptional()
  @IsBoolean()
  defaultValueBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _defaultValueBoolean?: Element;

  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  @IsOptional()
  @IsString()
  defaultValueCanonical?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _defaultValueCanonical?: Element;

  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  @IsOptional()
  @IsString()
  defaultValueCode?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _defaultValueCode?: Element;

  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  @IsOptional()
  @IsString()
  defaultValueDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _defaultValueDate?: Element;

  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  @IsOptional()
  @IsString()
  defaultValueDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _defaultValueDateTime?: Element;

  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  @IsOptional()
  @IsNumber()
  defaultValueDecimal?: number;

  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  @IsOptional()
  @IsString()
  defaultValueId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _defaultValueId?: Element;

  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  @IsOptional()
  @IsString()
  defaultValueInstant?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _defaultValueInstant?: Element;

  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  @IsOptional()
  @IsNumber()
  defaultValueInteger?: number;

  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  @IsOptional()
  @IsString()
  defaultValueMarkdown?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _defaultValueMarkdown?: Element;

  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  @IsOptional()
  @IsString()
  defaultValueOid?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _defaultValueOid?: Element;

  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  @IsOptional()
  @IsNumber()
  defaultValuePositiveInt?: number;

  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  @IsOptional()
  @IsString()
  defaultValueString?: string;

  /**
   * Constructor for StructureMapGroupRuleSource
   */
  constructor(source: Partial<StructureMapGroupRuleSource> = {}) {
    super(source);
  }
}
