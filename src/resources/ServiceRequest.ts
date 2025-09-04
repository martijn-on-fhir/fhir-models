import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
import { Ratio } from '../elements/Ratio';
import { Reference } from '../elements/Reference';
import { Timing } from '../backbone/Timing';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ServiceRequest extends DomainResource implements fhir.ServiceRequest {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'ServiceRequest' as const;

  /**
   * If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example "pain", "on fla
   */
  @IsOptional()
  @IsBoolean()
  asNeededBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _asNeededBoolean?: Element;

  /**
   * If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example "pain", "on fla
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  asNeededCodeableConcept?: CodeableConcept;

  /**
   * When the request transitioned to being actionable.
   */
  @IsOptional()
  @IsString()
  authoredOn?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _authoredOn?: Element;

  /**
   * Plan/proposal/order fulfilled by this request.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /**
   * Only used if not implicit in the code found in ServiceRequest.code.  If the use case requires BodySite to be handled as 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept[];

  /**
   * There may be multiple axis of categorization depending on the context or use case for retrieving or displaying the resou
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /**
   * Many laboratory and radiology procedure codes embed the specimen/organ system in the test order name, for example,  seru
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * In general, only the code and timeframe will be present, though occasional additional qualifiers such as body site or ev
   */
  @IsOptional()
  @IsBoolean()
  doNotPerform?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _doNotPerform?: Element;

  /**
   * An encounter that provides additional information about the healthcare context in which this request is made.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * The identifier.type element is used to distinguish between the identifiers assigned by the orderer (known as the 'Placer
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is bes
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesCanonical?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _instantiatesCanonical?: Element[];

  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesUri?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _instantiatesUri?: Element[];

  /**
   * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be needed for delivering the
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  insurance?: Reference[];

  /**
   * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
   */
  @IsOptional()
  @IsIn(['proposal', 'plan', 'directive', 'order', 'original-order', 'reflex-order', 'filler-order', 'instance-order', 'option'])
  intent?: ('proposal'|'plan'|'directive'|'order'|'original-order'|'reflex-order'|'filler-order'|'instance-order'|'option');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _intent?: Element;

  /**
   * The preferred location(s) where the procedure should actually happen in coded or free text form. E.g. at home or nursing
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  locationCode?: CodeableConcept[];

  /**
   * A reference to the the preferred location(s) where the procedure should actually happen. E.g. at home or nursing day car
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  locationReference?: Reference[];

  /**
   * Any other notes and comments made about the service request. For example, internal billing notes.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * The date/time at which the requested service should occur.
   */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _occurrenceDateTime?: Element;

  /**
   * Constructor for ServiceRequest
   */
  constructor(source: Partial<ServiceRequest> = {}) {
    super(source);
    this.resourceType = 'ServiceRequest';
  }
}
