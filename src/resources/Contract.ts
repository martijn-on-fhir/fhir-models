import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContractContentDefinition } from '../backbone/ContractContentDefinition';
import { ContractFriendly } from '../backbone/ContractFriendly';
import { ContractLegal } from '../backbone/ContractLegal';
import { ContractRule } from '../backbone/ContractRule';
import { ContractSigner } from '../backbone/ContractSigner';
import { ContractTerm } from '../backbone/ContractTerm';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Contract extends DomainResource implements fhir.Contract {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Contract' as const;

  /**
   * Alternative representation of the title for this Contract definition, derivative, or instance in any legal state., e.g.,
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  alias?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _alias?: Element[];

  /**
   * Relevant time or time-period when this Contract is applicable.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  applies?: Period;

  /**
   * The individual or organization that authored the Contract definition, derivative, or instance in any legal state.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /**
   * A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpo
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  authority?: Reference[];

  /**
   * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associ
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ContractContentDefinition)
  contentDefinition?: ContractContentDefinition;

  /**
   * The minimal content derived from the basal information source at a specific stage in its lifecycle.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  contentDerivative?: CodeableConcept;

  /**
   * Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  domain?: Reference[];

  /**
   * Event resulting in discontinuation or termination of this Contract instance by one or more parties to the contract.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  expirationType?: CodeableConcept;

  /**
   * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the repre
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractFriendly)
  friendly?: ContractFriendly[];

  /**
   * Unique identifier for this Contract or a derivative that references a Source Contract.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or part by this Contract.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  instantiatesCanonical?: Reference;

  /**
   * The URL pointing to an externally maintained definition that is adhered to in whole or in part by this Contract.
   */
  @IsOptional()
  @IsString()
  instantiatesUri?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _instantiatesUri?: Element;

  /**
   * When this  Contract was issued.
   */
  @IsOptional()
  @IsString()
  issued?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _issued?: Element;

  /**
   * List of Legal expressions or representations of this Contract.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractLegal)
  legal?: ContractLegal[];

  /**
   * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  legallyBindingAttachment?: Attachment;

  /**
   * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  legallyBindingReference?: Reference;

  /**
   * Legal states of the formation of a legal instrument, which is a formally executed written document that can be formally 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  legalState?: CodeableConcept;

  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is 
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key s
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  relevantHistory?: Reference[];

  /**
   * List of Computable Policy Rule Language Representations of this Contract.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractRule)
  rule?: ContractRule[];

  /**
   * A selector of legal concerns for this Contract definition, derivative, or instance in any legal state.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  scope?: CodeableConcept;

  /**
   * Constructor for Contract
   */
  constructor(source: Partial<Contract> = {}) {
    super(source);
    this.resourceType = 'Contract';
  }
}
