import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import { Attachment } from './Attachment';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiti
 */
export class RelatedArtifact extends Element {
  /**
   * Additional structured information about citations should be captured as extensions.
   */
  @IsOptional()
  @IsString()
  citation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _citation?: Element;

  /**
   * A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
   */
  @IsOptional()
  @IsString()
  display?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _display?: Element;

  /**
   * The document being referenced, represented as an attachment. This is exclusive with the resource element.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  document?: Attachment;

  /**
   * A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.
   */
  @IsOptional()
  @IsString()
  label?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _label?: Element;

  /**
   * If the type is predecessor, this is a reference to the succeeding knowledge resource. If the type is successor, this is a reference to the prior knowl
   */
  @IsOptional()
  @IsString()
  resource?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _resource?: Element;

  /**
   * The type of relationship to the related artifact.
   */
  @IsOptional()
  @IsIn(['documentation', 'justification', 'citation', 'predecessor', 'successor', 'derived-from', 'depends-on', 'composed-of'])
  type: ('documentation'|'justification'|'citation'|'predecessor'|'successor'|'derived-from'|'depends-on'|'composed-of');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * If a document or resource element is present, this element SHALL NOT be provided (use the url or reference in the Attachment or resource reference).
   */
  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _url?: Element;

  /**
   * Constructor for RelatedArtifact
   */
  constructor(source: Partial<RelatedArtifact> = {}) {
    super(source);
  }
}
