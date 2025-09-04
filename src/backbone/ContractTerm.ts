import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContractTermAction } from './ContractTermAction';
import { ContractTermAsset } from './ContractTermAsset';
import { ContractTermOffer } from './ContractTermOffer';
import { ContractTermSecurityLabel } from './ContractTermSecurityLabel';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ContractTerm extends BackboneElement implements fhir.ContractTerm {
  /**
   * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa. For exa
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTermAction)
  action?: ContractTermAction[];

  /**
   * Relevant time or time-period when this Contract Provision is applicable.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  applies?: Period;

  /**
   * Contract Term Asset List.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTermAsset)
  asset?: ContractTermAsset[];

  /**
   * Nested group of Contract Provisions.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTerm)
  group?: ContractTerm[];

  /**
   * Unique identifier for this particular Contract Provision.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * When this Contract Provision was issued.
   */
  @IsOptional()
  @IsString()
  issued?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _issued?: Element;

  /**
   * The matter of concern in the context of this provision of the agrement.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ContractTermOffer)
  offer?: ContractTermOffer;

  /**
   * Security labels that protect the handling of information about the term and its elements, which may be specifically iden
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTermSecurityLabel)
  securityLabel?: ContractTermSecurityLabel[];

  /**
   * A specialized legal clause or condition based on overarching contract type.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  subType?: CodeableConcept;

  /**
   * Statement of a provision in a policy or a contract.
   */
  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _text?: Element;

  /**
   * The entity that the term applies to.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  topicCodeableConcept?: CodeableConcept;

  /**
   * The entity that the term applies to.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  topicReference?: Reference;

  /**
   * A legal clause or condition contained within a contract that requires one or both parties to perform a particular requir
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for ContractTerm
   */
  constructor(source: Partial<ContractTerm> = {}) {
    super(source);
  }
}
