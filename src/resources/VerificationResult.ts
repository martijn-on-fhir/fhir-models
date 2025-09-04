import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
import { Timing } from '../backbone/Timing';
import { VerificationResultAttestation } from '../backbone/VerificationResultAttestation';
import { VerificationResultPrimarySource } from '../backbone/VerificationResultPrimarySource';
import { VerificationResultValidator } from '../backbone/VerificationResultValidator';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class VerificationResult extends DomainResource implements fhir.VerificationResult {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'VerificationResult' as const;

  /**
   * Information about the entity attesting to information.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => VerificationResultAttestation)
  attestation?: VerificationResultAttestation;

  /**
   * The result if validation fails (fatal; warning; record only; none).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  failureAction?: CodeableConcept;

  /**
   * Frequency of revalidation.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  frequency?: Timing;

  /**
   * The date/time validation was last completed (including failed validations).
   */
  @IsOptional()
  @IsString()
  lastPerformed?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _lastPerformed?: Element;

  /**
   * The frequency with which the target must be validated (none; initial; periodic).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  need?: CodeableConcept;

  /**
   * The date when target is next validated, if appropriate.
   */
  @IsOptional()
  @IsString()
  nextScheduled?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _nextScheduled?: Element;

  /**
   * Information about the primary source(s) involved in validation.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VerificationResultPrimarySource)
  primarySource?: VerificationResultPrimarySource[];

  /**
   * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalida
   */
  @IsOptional()
  @IsIn(['attested', 'validated', 'in-process', 'req-revalid', 'val-fail', 'reval-fail'])
  status?: ('attested'|'validated'|'in-process'|'req-revalid'|'val-fail'|'reval-fail');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * When the validation status was updated.
   */
  @IsOptional()
  @IsString()
  statusDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _statusDate?: Element;

  /**
   * A resource that was validated.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  target?: Reference[];

  /**
   * The fhirpath location(s) within the resource that was validated.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  targetLocation?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _targetLocation?: Element[];

  /**
   * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalon
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  validationProcess?: CodeableConcept[];

  /**
   * What the target is validated against (nothing; primary source; multiple sources).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  validationType?: CodeableConcept;

  /**
   * Information about the entity validating information.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VerificationResultValidator)
  validator?: VerificationResultValidator[];

  /**
   * Constructor for VerificationResult
   */
  constructor(source: Partial<VerificationResult> = {}) {
    super(source);
    this.resourceType = 'VerificationResult';
  }
}
