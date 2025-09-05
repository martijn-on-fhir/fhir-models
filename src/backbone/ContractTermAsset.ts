import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { ContractTermAssetContext } from './ContractTermAssetContext';
import { ContractTermAssetValuedItem } from './ContractTermAssetValuedItem';
import { ContractTermOfferAnswer } from './ContractTermOfferAnswer';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ContractTermAsset extends BackboneElement {
  /**
   * Response to assets.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTermOfferAnswer)
  answer?: ContractTermOfferAnswer[];

  /**
   * Description of the quality and completeness of the asset that imay be a factor in its valuation.
   */
  @IsOptional()
  @IsString()
  condition?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _condition?: Element;

  /**
   * Circumstance of the asset.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTermAssetContext)
  context?: ContractTermAssetContext[];

  /**
   * Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse.
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
   * Asset relevant contractual time period.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Period)
  period?: Period[];

  /**
   * Type of Asset availability for use or ownership.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  periodType?: CodeableConcept[];

  /**
   * Specifies the applicability of the term to an asset resource instance, and instances it refers to orinstances that refer
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  relationship?: Coding;

  /**
   * Differentiates the kind of the asset .
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  scope?: CodeableConcept;

  /**
   * Security labels that protects the asset.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  securityLabelNumber?: number[];

  /**
   * May be a subtype or part of an offered asset.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  subtype?: CodeableConcept[];

  /**
   * Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in th
   */
  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _text?: Element;

  /**
   * Target entity type about which the term may be concerned.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /**
   * Associated entities.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  typeReference?: Reference[];

  /**
   * Time period of asset use.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Period)
  usePeriod?: Period[];

  /**
   * Contract Valued Item List.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTermAssetValuedItem)
  valuedItem?: ContractTermAssetValuedItem[];

  /**
   * Constructor for ContractTermAsset
   */
  constructor(source: Partial<ContractTermAsset> = {}) {
    super(source);
  }
}
