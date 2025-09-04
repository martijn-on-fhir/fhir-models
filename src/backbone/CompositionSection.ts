import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Narrative } from '../elements/Narrative';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CompositionSection extends BackboneElement implements fhir.CompositionSection {
  /**
   * Identifies who is responsible for the information in this section, not necessarily who typed it in.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  author?: Reference[];

  /**
   * The code identifies the section for an automated processor of the document. This is particularly relevant when using pro
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * The various reasons for an empty section make a significant interpretation to its interpretation. Note that this code is
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  emptyReason?: CodeableConcept;

  /**
   * If there are no entries in the list, an emptyReason SHOULD be provided.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  entry?: Reference[];

  /**
   * Typically, sections in a doument are about the subject of the document, whether that is a  patient, or group of patients
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  focus?: Reference;

  /**
   * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
   */
  @IsOptional()
  @IsIn(['working', 'snapshot', 'changes'])
  mode?: ('working'|'snapshot'|'changes');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _mode?: Element;

  /**
   * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own prefe
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  orderedBy?: CodeableConcept;

  /**
   * Nested sections are primarily used to help human readers navigate to particular portions of the document.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompositionSection)
  section?: CompositionSection[];

  /**
   * Document profiles may define what content should be represented in the narrative to ensure clinical safety.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Narrative)
  text?: Narrative;

  /**
   * The title identifies the section for a human reader. The title must be consistent with the narrative of the resource tha
   */
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _title?: Element;

  /**
   * Constructor for CompositionSection
   */
  constructor(source: Partial<CompositionSection> = {}) {
    super(source);
  }
}
