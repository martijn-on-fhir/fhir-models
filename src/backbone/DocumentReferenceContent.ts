import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Attachment } from '../elements/Attachment';
import { Coding } from '../elements/Coding';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DocumentReferenceContent extends BackboneElement {
  /**
   * The document or URL of the document along with critical metadata to prove content has integrity.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  attachment?: Attachment;

  /**
   * Note that while IHE mostly issues URNs for format types, not all documents can be identified by a URI.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  format?: Coding;

  /**
   * Constructor for DocumentReferenceContent
   */
  constructor(source: Partial<DocumentReferenceContent> = {}) {
    super(source);
  }
}
