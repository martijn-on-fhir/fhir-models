import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { DocumentManifestRelated } from '../backbone/DocumentManifestRelated';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DocumentManifest extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'DocumentManifest' as const;

  /**
   * Not necessarily who did the actual data entry (i.e. typist) or who was the source (informant).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  author?: Reference[];

  /**
   * When used for XDS the intended focus of the DocumentManifest is for the reference to target to be a set of DocumentRefer
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  content?: Reference[];

  /**
   * Creation time is used for tracking, organizing versions and searching. This is the creation time of the document set, no
   */
  @IsOptional()
  @IsString()
  created?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _created?: Element;

  /**
   * What the document is about, rather than a terse summary of the document. It is commonly the case that records do not hav
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Other identifiers associated with the document manifest, including version independent  identifiers.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contex
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  masterIdentifier?: Identifier;

  /**
   * How the recipient receives the document set or is notified of it is up to the implementation. This element is just a sta
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  recipient?: Reference[];

  /**
   * May be identifiers or resources that caused the DocumentManifest to be created.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DocumentManifestRelated)
  related?: DocumentManifestRelated[];

  /**
   * Identifies the source system, application, or software that produced the document manifest.
   */
  @IsOptional()
  @IsString()
  source?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _source?: Element;

  /**
   * This element is labeled as a modifier because the status contains the codes that mark the manifest as not currently vali
   */
  @IsOptional()
  @IsIn(['current', 'superseded', 'entered-in-error'])
  status?: ('current'|'superseded'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for DocumentManifest
   */
  constructor(source: Partial<DocumentManifest> = {}) {
    super(source);
    this.resourceType = 'DocumentManifest';
  }
}
