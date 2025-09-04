import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class BodyStructure extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'BodyStructure' as const;

  /**
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _active?: Element;

  /**
   * This description could include any visual markings used to orientate the viewer e.g. external reference points, special 
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Identifier for this instance of the anatomical structure.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Image or images used to identify a location.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Attachment)
  image?: Attachment[];

  /**
   * The anatomical location or region of the specimen, lesion, or body structure.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  location?: CodeableConcept;

  /**
   * Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  locationQualifier?: CodeableConcept[];

  /**
   * The minimum cardinality of 0 supports the use case of specifying a location without defining a morphology.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  morphology?: CodeableConcept;

  /**
   * The person to which the body site belongs.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /**
   * Constructor for BodyStructure
   */
  constructor(source: Partial<BodyStructure> = {}) {
    super(source);
    this.resourceType = 'BodyStructure';
  }
}
