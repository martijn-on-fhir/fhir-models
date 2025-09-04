import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { DocumentReferenceContent } from '../backbone/DocumentReferenceContent';
import { DocumentReferenceContext } from '../backbone/DocumentReferenceContext';
import { DocumentReferenceRelatesTo } from '../backbone/DocumentReferenceRelatesTo';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DocumentReference extends DomainResource implements fhir.DocumentReference {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'DocumentReference' as const;

  /**
   * Represents a participant within the author institution who has legally authenticated or attested the document. Legal aut
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  authenticator?: Reference;

  /**
   * Not necessarily who did the actual data entry (i.e. typist) or who was the source (informant).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  author?: Reference[];

  /**
   * Key metadata element describing the the category or classification of the document. This is a broader perspective that g
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /**
   * The document and format referenced. There may be multiple content element repetitions, each with a different format.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DocumentReferenceContent)
  content?: DocumentReferenceContent[];

  /**
   * These values are primarily added to help with searching for interesting/relevant documents.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => DocumentReferenceContext)
  context?: DocumentReferenceContext;

  /**
   * Identifies the logical organization (software system, vendor, or department) to go to find the current version, where to
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  custodian?: Reference;

  /**
   * Referencing/indexing time is used for tracking, organizing versions and searching.
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * What the document is about,  a terse summary of the document.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * The document that is pointed to might be in various lifecycle states.
   */
  @IsOptional()
  @IsIn(['preliminary', 'final', 'amended', 'entered-in-error'])
  docStatus?: ('preliminary'|'final'|'amended'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _docStatus?: Element;

  /**
   * Other identifiers associated with the document, including version independent identifiers.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * CDA Document Id extension and root.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  masterIdentifier?: Identifier;

  /**
   * This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DocumentReferenceRelatesTo)
  relatesTo?: DocumentReferenceRelatesTo[];

  /**
   * The confidentiality codes can carry multiple vocabulary items. HL7 has developed an understanding of security and privac
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  securityLabel?: CodeableConcept[];

  /**
   * This is the status of the DocumentReference object, which might be independent from the docStatus element. This element 
   */
  @IsOptional()
  @IsIn(['current', 'superseded', 'entered-in-error'])
  status?: ('current'|'superseded'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * Key metadata element describing the document that describes he exact type of document. Helps humans to assess whether th
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for DocumentReference
   */
  constructor(source: Partial<DocumentReference> = {}) {
    super(source);
    this.resourceType = 'DocumentReference';
  }
}
