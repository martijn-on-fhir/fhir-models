import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
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

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TaskInput extends BackboneElement {
  /**
   * If referencing a BPMN workflow or Protocol, the "system" is the URL for the workflow definition and the code is the "nam
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * The value of the input parameter as a basic type.
   */
  @IsOptional()
  @IsString()
  valueBase64Binary?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueBase64Binary?: Element;

  /**
   * The value of the input parameter as a basic type.
   */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueBoolean?: Element;

  /**
   * The value of the input parameter as a basic type.
   */
  @IsOptional()
  @IsString()
  valueCanonical?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueCanonical?: Element;

  /**
   * The value of the input parameter as a basic type.
   */
  @IsOptional()
  @IsString()
  valueCode?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueCode?: Element;

  /**
   * The value of the input parameter as a basic type.
   */
  @IsOptional()
  @IsString()
  valueDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueDate?: Element;

  /**
   * The value of the input parameter as a basic type.
   */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueDateTime?: Element;

  /**
   * The value of the input parameter as a basic type.
   */
  @IsOptional()
  @IsNumber()
  valueDecimal?: number;

  /**
   * The value of the input parameter as a basic type.
   */
  @IsOptional()
  @IsString()
  valueId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueId?: Element;

  /**
   * The value of the input parameter as a basic type.
   */
  @IsOptional()
  @IsString()
  valueInstant?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueInstant?: Element;

  /**
   * The value of the input parameter as a basic type.
   */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /**
   * The value of the input parameter as a basic type.
   */
  @IsOptional()
  @IsString()
  valueMarkdown?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueMarkdown?: Element;

  /**
   * The value of the input parameter as a basic type.
   */
  @IsOptional()
  @IsString()
  valueOid?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueOid?: Element;

  /**
   * The value of the input parameter as a basic type.
   */
  @IsOptional()
  @IsNumber()
  valuePositiveInt?: number;

  /**
   * The value of the input parameter as a basic type.
   */
  @IsOptional()
  @IsString()
  valueString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueString?: Element;

  /**
   * The value of the input parameter as a basic type.
   */
  @IsOptional()
  @IsString()
  valueTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueTime?: Element;

  /**
   * The value of the input parameter as a basic type.
   */
  @IsOptional()
  @IsNumber()
  valueUnsignedInt?: number;

  /**
   * The value of the input parameter as a basic type.
   */
  @IsOptional()
  @IsString()
  valueUri?: string;

  /**
   * Constructor for TaskInput
   */
  constructor(source: Partial<TaskInput> = {}) {
    super(source);
  }
}
