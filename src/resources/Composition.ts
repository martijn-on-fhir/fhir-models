import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { CompositionAttester } from '../backbone/CompositionAttester';
import { CompositionEvent } from '../backbone/CompositionEvent';
import { CompositionRelatesTo } from '../backbone/CompositionRelatesTo';
import { CompositionSection } from '../backbone/CompositionSection';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Composition extends DomainResource implements fhir.Composition {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Composition' as const;

  /**
   * Only list each attester once.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompositionAttester)
  attester?: CompositionAttester[];

  /**
   * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  author?: Reference[];

  /**
   * This is a metadata field from [XDS/MHD](http://wiki.ihe.net/index.php?title=Mobile_access_to_Health_Documents_(MHD)).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /**
   * The exact use of this element, and enforcement and issues related to highly sensitive documents are out of scope for the
   */
  @IsOptional()
  @IsString()
  confidentiality?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _confidentiality?: Element;

  /**
   * This is useful when documents are derived from a composition - provides guidance for how to get the latest version of th
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  custodian?: Reference;

  /**
   * The Last Modified Date on the composition may be after the date of the document was attested without being changed.
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * Describes the clinical encounter or type of care this documentation is associated with.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * The event needs to be consistent with the type element, though can provide further information if desired.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompositionEvent)
  event?: CompositionEvent[];

  /**
   * Similar to ClinicalDocument/setId in CDA. See discussion in resource definition for how these relate.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * A document is a version specific composition.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompositionRelatesTo)
  relatesTo?: CompositionRelatesTo[];

  /**
   * The root of the sections that make up the composition.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompositionSection)
  section?: CompositionSection[];

  /**
   * If a composition is marked as withdrawn, the compositions/documents in the series, or data from the composition or docum
   */
  @IsOptional()
  @IsIn(['preliminary', 'final', 'amended', 'entered-in-error'])
  status?: ('preliminary'|'final'|'amended'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * For clinical documents, this is usually the patient.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * For many compositions, the title is the same as the text or a display name of Composition.type (e.g. a "consultation" or
   */
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _title?: Element;

  /**
   * For Composition type, LOINC is ubiquitous and strongly endorsed by HL7. Most implementation guides will require a specif
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for Composition
   */
  constructor(source: Partial<Composition> = {}) {
    super(source);
    this.resourceType = 'Composition';
  }
}
