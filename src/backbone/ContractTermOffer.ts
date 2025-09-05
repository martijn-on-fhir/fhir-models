import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContractTermOfferAnswer } from './ContractTermOfferAnswer';
import { ContractTermOfferParty } from './ContractTermOfferParty';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ContractTermOffer extends BackboneElement {
  /**
   * Response to offer text.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTermOfferAnswer)
  answer?: ContractTermOfferAnswer[];

  /**
   * Type of choice made by accepting party with respect to an offer made by an offeror/ grantee.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  decision?: CodeableConcept;

  /**
   * How the decision about a Contract was conveyed.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  decisionMode?: CodeableConcept[];

  /**
   * Unique identifier for this particular Contract Provision.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The id of the clause or question text of the offer in the referenced questionnaire/response.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  linkId?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _linkId?: Element[];

  /**
   * Offer Recipient.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTermOfferParty)
  party?: ContractTermOfferParty[];

  /**
   * Security labels that protects the offer.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  securityLabelNumber?: number[];

  /**
   * Human readable form of this Contract Offer.
   */
  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _text?: Element;

  /**
   * The Contract.topic may be an application for or offer of a policy or service (e.g., uri to a consent directive form or a
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  topic?: Reference;

  /**
   * Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life tim
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for ContractTermOffer
   */
  constructor(source: Partial<ContractTermOffer> = {}) {
    super(source);
  }
}
