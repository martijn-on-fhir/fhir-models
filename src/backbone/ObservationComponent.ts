import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ObservationReferenceRange } from './ObservationReferenceRange';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
import { Ratio } from '../elements/Ratio';
import { SampledData } from '../elements/SampledData';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ObservationComponent extends BackboneElement implements fhir.ObservationComponent {
  /**
   * *All* code-value and  component.code-component.value pairs need to be taken into account to correctly understand the mea
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * "Null" or exceptional values can be represented two ways in FHIR Observations.  One way is to simply include them in the
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  dataAbsentReason?: CodeableConcept;

  /**
   * Historically used for laboratory results (known as 'abnormal flag' ),  its use extends to other use cases where coded in
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  interpretation?: CodeableConcept[];

  /**
   * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant r
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationReferenceRange)
  referenceRange?: ObservationReferenceRange[];

  /**
   * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /**
   * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  valueCodeableConcept?: CodeableConcept;

  /**
   * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  
   */
  @IsOptional()
  @IsString()
  valueString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueString?: Element;

  /**
   * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  
   */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueBoolean?: Element;

  /**
   * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  
   */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /**
   * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  valueRange?: Range;

  /**
   * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  valueRatio?: Ratio;

  /**
   * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => SampledData)
  valueSampledData?: SampledData;

  /**
   * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  
   */
  @IsOptional()
  @IsString()
  valueTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueTime?: Element;

  /**
   * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  
   */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueDateTime?: Element;

  /**
   * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  valuePeriod?: Period;

  /**
   * Constructor for ObservationComponent
   */
  constructor(source: Partial<ObservationComponent> = {}) {
    super(source);
  }
}
