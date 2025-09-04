import 'reflect-metadata';
import {IsArray, IsBoolean, IsNumber, IsOptional, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {BackboneElement} from '../base/BackboneElement';
import {Coding} from '../elements/Coding';
import {ElementDefinitionBase} from '../elements/ElementDefinitionBase';
import {ElementDefinitionBinding} from '../elements/ElementDefinitionBinding';
import {ElementDefinitionConstraint} from '../elements/ElementDefinitionConstraint';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ElementDefinition extends BackboneElement {
  /**
   * Identifies additional names by which this element might also be known.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  alias?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _alias?: Element[];

  /**
   * The base information does not carry any information that could not be determined from the path and related profiles, but
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ElementDefinitionBase)
  base?: ElementDefinitionBase;

  /**
   * For a CodeableConcept, when no codes are allowed - only text, use a binding of strength "required" with a description ex
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ElementDefinitionBinding)
  binding?: ElementDefinitionBinding;

  /**
   * The concept SHALL be properly aligned with the data element definition and other constraints, as defined in the code sys
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  code?: Coding[];

  /**
   * If it is possible to capture usage rules using constraints, that mechanism should be used in preference to this element.
   */
  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _comment?: Element;

  /**
   * A reference to an invariant that may make additional statements about the cardinality or value in the instance.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  condition?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _condition?: Element[];

  /**
   * Constraints should be declared on the "context" element - the lowest element in the hierarchy that is common to all node
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ElementDefinitionConstraint)
  constraint?: ElementDefinitionConstraint[];

  /**
   * ContentReferences can only be defined in specializations, not constrained types, and they cannot be changed and always r
   */
  @IsOptional()
  @IsString()
  contentReference?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _contentReference?: Element;

  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the de
   */
  @IsOptional()
  @IsString()
  defaultValueBase64Binary?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _defaultValueBase64Binary?: Element;

  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the de
   */
  @IsOptional()
  @IsBoolean()
  defaultValueBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _defaultValueBoolean?: Element;

  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the de
   */
  @IsOptional()
  @IsString()
  defaultValueCanonical?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _defaultValueCanonical?: Element;

  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the de
   */
  @IsOptional()
  @IsString()
  defaultValueCode?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _defaultValueCode?: Element;

  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the de
   */
  @IsOptional()
  @IsString()
  defaultValueDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _defaultValueDate?: Element;

  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the de
   */
  @IsOptional()
  @IsString()
  defaultValueDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _defaultValueDateTime?: Element;

  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the de
   */
  @IsOptional()
  @IsNumber()
  defaultValueDecimal?: number;

  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the de
   */
  @IsOptional()
  @IsString()
  defaultValueId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _defaultValueId?: Element;

  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the de
   */
  @IsOptional()
  @IsString()
  defaultValueInstant?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _defaultValueInstant?: Element;

  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the de
   */
  @IsOptional()
  @IsNumber()
  defaultValueInteger?: number;

  /**
   * Constructor for ElementDefinition
   */
  constructor(source: Partial<ElementDefinition> = {}) {
    super(source);
  }
}
