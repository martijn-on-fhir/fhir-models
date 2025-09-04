import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
import { Signature } from '../elements/Signature';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class VerificationResultAttestation extends BackboneElement {
  /**
   * The method by which attested information was submitted/retrieved (manual; API; Push).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  communicationMethod?: CodeableConcept;

  /**
   * The date the information was attested to.
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * When the who is asserting on behalf of another (organization or individual).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  onBehalfOf?: Reference;

  /**
   * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attesta
   */
  @IsOptional()
  @IsString()
  proxyIdentityCertificate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _proxyIdentityCertificate?: Element;

  /**
   * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Signature)
  proxySignature?: Signature;

  /**
   * A digital identity certificate associated with the attestation source.
   */
  @IsOptional()
  @IsString()
  sourceIdentityCertificate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _sourceIdentityCertificate?: Element;

  /**
   * Signed assertion by the attestation source that they have attested to the information.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Signature)
  sourceSignature?: Signature;

  /**
   * The individual or organization attesting to information.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  who?: Reference;

  /**
   * Constructor for VerificationResultAttestation
   */
  constructor(source: Partial<VerificationResultAttestation> = {}) {
    super(source);
  }
}
