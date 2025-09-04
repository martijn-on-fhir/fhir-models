import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import { SpecimenCollection } from '../backbone/SpecimenCollection';
import { SpecimenContainer } from '../backbone/SpecimenContainer';
import { SpecimenProcessing } from '../backbone/SpecimenProcessing';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Specimen extends DomainResource implements fhir.Specimen {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Specimen' as const;

  /**
   * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen ident
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  accessionIdentifier?: Identifier;

  /**
   * Details concerning the specimen collection.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => SpecimenCollection)
  collection?: SpecimenCollection;

  /**
   * Specimen condition is an observation made about the specimen.  It's a point-in-time assessment.  It can be used to asses
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  condition?: CodeableConcept[];

  /**
   * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addre
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SpecimenContainer)
  container?: SpecimenContainer[];

  /**
   * Id for specimen.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, se
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliq
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  parent?: Reference[];

  /**
   * Details concerning processing and processing steps for the specimen.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SpecimenProcessing)
  processing?: SpecimenProcessing[];

  /**
   * Time when specimen was received for processing or testing.
   */
  @IsOptional()
  @IsString()
  receivedTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _receivedTime?: Element;

  /**
   * The request may be explicit or implied such with a ServiceRequest that requires a blood draw.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  request?: Reference[];

  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  @IsOptional()
  @IsIn(['available', 'unavailable', 'unsatisfactory', 'entered-in-error'])
  status?: ('available'|'unavailable'|'unsatisfactory'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample)
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * The type can change the way that a specimen is handled and drives what kind of analyses can properly be performed on the
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for Specimen
   */
  constructor(source: Partial<Specimen> = {}) {
    super(source);
    this.resourceType = 'Specimen';
  }
}
