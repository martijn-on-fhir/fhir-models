import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Age } from '../elements/Age';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { ProcedureFocalDevice } from '../backbone/ProcedureFocalDevice';
import { ProcedurePerformer } from '../backbone/ProcedurePerformer';
import { Range } from '../elements/Range';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Procedure extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Procedure' as const;

  /**
   * Individual who is making the procedure statement.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  asserter?: Reference;

  /**
   * A reference to a resource that contains details of the request for this procedure.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /**
   * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the stan
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept[];

  /**
   * A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /**
   * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparosco
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * If complications are only expressed by the narrative text, they can be captured using the CodeableConcept.text.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  complication?: CodeableConcept[];

  /**
   * Any complications that occurred during the procedure, or in the immediate post-performance period.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  complicationDetail?: Reference[];

  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after t
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, at
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProcedureFocalDevice)
  focalDevice?: ProcedureFocalDevice[];

  /**
   * If the procedure required specific follow up - e.g. removal of sutures. The follow up may be represented as a simple not
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  followUp?: CodeableConcept[];

  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best prac
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The URL pointing to a FHIR-defined protocol, guideline, order set or other definition that is adhered to in whole or in 
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
   * The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /**
   * Any other notes and comments about the procedure.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * If outcome contains narrative text only, it can be captured using the CodeableConcept.text.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  outcome?: CodeableConcept;

  /**
   * The MedicationAdministration resource has a partOf reference to Procedure, but this is not a circular reference.   For e
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /**
   * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when
   */
  @IsOptional()
  @IsString()
  performedDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _performedDateTime?: Element;

  /**
   * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  performedPeriod?: Period;

  /**
   * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when
   */
  @IsOptional()
  @IsString()
  performedString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _performedString?: Element;

  /**
   * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Age)
  performedAge?: Age;

  /**
   * Constructor for Procedure
   */
  constructor(source: Partial<Procedure> = {}) {
    super(source);
    this.resourceType = 'Procedure';
  }
}
