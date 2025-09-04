import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { ContractTermAssetContext } from './ContractTermAssetContext';
import { ContractTermAssetValuedItem } from './ContractTermAssetValuedItem';
import { ContractTermOfferAnswer } from './ContractTermOfferAnswer';
import { Element } from './Element';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * Contract Term Asset List.
 */
export interface ContractTermAsset extends BackboneElement {

  /**
   * Response to assets.
   */
  answer?: ContractTermOfferAnswer[] | undefined;
  /**
   * Description of the quality and completeness of the asset that imay be a factor in its valuation.
   */
  condition?: string | undefined;
  _condition?: Element | undefined;
  /**
   * Circumstance of the asset.
   */
  context?: ContractTermAssetContext[] | undefined;
  /**
   * Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse.
   */
  linkId?: string[] | undefined;
  _linkId?: Element[] | undefined;
  /**
   * Asset relevant contractual time period.
   */
  period?: Period[] | undefined;
  /**
   * Type of Asset availability for use or ownership.
   */
  periodType?: CodeableConcept[] | undefined;
  /**
   * Specifies the applicability of the term to an asset resource instance, and instances it refers to orinstances that refer to it, and/or are owned by the offeree.
   */
  relationship?: Coding | undefined;
  /**
   * Differentiates the kind of the asset .
   */
  scope?: CodeableConcept | undefined;
  /**
   * Security labels that protects the asset.
   */
  securityLabelNumber?: number[] | undefined;
  /**
   * May be a subtype or part of an offered asset.
   */
  subtype?: CodeableConcept[] | undefined;
  /**
   * Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract.
   */
  text?: string | undefined;
  _text?: Element | undefined;
  /**
   * Target entity type about which the term may be concerned.
   */
  type?: CodeableConcept[] | undefined;
  /**
   * Associated entities.
   */
  typeReference?: Reference[] | undefined;
  /**
   * Time period of asset use.
   */
  usePeriod?: Period[] | undefined;
  /**
   * Contract Valued Item List.
   */
  valuedItem?: ContractTermAssetValuedItem[] | undefined;

}