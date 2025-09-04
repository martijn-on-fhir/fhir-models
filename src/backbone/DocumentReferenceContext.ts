import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DocumentReferenceContext extends BackboneElement implements fhir.DocumentReferenceContext {
  /**
   * Describes the clinical encounter or type of care that the document content is associated with.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  encounter?: Reference[];

  /**
   * An event can further specialize the act inherent in the type, such as  where it is simply "Procedure Report" and the pro
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  event?: CodeableConcept[];

  /**
   * The kind of facility where the patient was seen.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  facilityType?: CodeableConcept;

  /**
   * The time period over which the service that is described by the document was provided.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * This element should be based on a coarse classification system for the class of specialty practice. Recommend the use of
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  practiceSetting?: CodeableConcept;

  /**
   * May be identifiers or resources that caused the DocumentReference or referenced Document to be created.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  related?: Reference[];

  /**
   * The Patient Information as known when the document was published. May be a reference to a version specific, or contained
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  sourcePatientInfo?: Reference;

  /**
   * Constructor for DocumentReferenceContext
   */
  constructor(source: Partial<DocumentReferenceContext> = {}) {
    super(source);
  }
}
