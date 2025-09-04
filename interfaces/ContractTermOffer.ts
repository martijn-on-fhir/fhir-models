import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { ContractTermOfferAnswer } from './ContractTermOfferAnswer';
import { ContractTermOfferParty } from './ContractTermOfferParty';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * The matter of concern in the context of this provision of the agrement.
 */
export interface ContractTermOffer extends BackboneElement {

  /**
   * Response to offer text.
   */
  answer?: ContractTermOfferAnswer[] | undefined;
  /**
   * Type of choice made by accepting party with respect to an offer made by an offeror/ grantee.
   */
  decision?: CodeableConcept | undefined;
  /**
   * How the decision about a Contract was conveyed.
   */
  decisionMode?: CodeableConcept[] | undefined;
  /**
   * Unique identifier for this particular Contract Provision.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The id of the clause or question text of the offer in the referenced questionnaire/response.
   */
  linkId?: string[] | undefined;
  _linkId?: Element[] | undefined;
  /**
   * Offer Recipient.
   */
  party?: ContractTermOfferParty[] | undefined;
  /**
   * Security labels that protects the offer.
   */
  securityLabelNumber?: number[] | undefined;
  /**
   * Human readable form of this Contract Offer.
   */
  text?: string | undefined;
  _text?: Element | undefined;
  /**
   * The Contract.topic may be an application for or offer of a policy or service (e.g., uri to a consent directive form or a health insurance policy), which becomes the Contract once accepted by both the grantor and grantee.
   * The Contract Resource may function simply as the computable representation of the executed contract, which may be the attached to the Contract Resource as the “binding” or as the “friendly” electronic form.  For example, a Contract Resource may be automatically populated with the values expressed in a related QuestionnaireResponse.
   * However, the Contract Resource may be considered the legally binding contract if it is the only “executed” form of this contract, and includes the signatures as *The Contract Resource may function as the computable representation of an application or offer in a pre-executed Contract if the grantor has not entered any values.  In this case, it is populated with values in a “legal” form of the application or offer or by the values in an associated Questionnaire.  If the grantor has filled in the legal form or the associated Questionnaire Response, then these values are used to populate a pre-executed Contract Resource.
   * If the Contract.topic is considered an application or offer, then the policy is often required to be attached as the “legal” basis for the application to ensure “informed consent” to the contract, and that any discrepancy between the application and the policy are interpreted against the policy.  Implementers should check organizational and jurisdictional policies to determine the relationship among multiple representations of a contract pre- and post-execution.
   */
  topic?: Reference | undefined;
  /**
   * Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.
   */
  type?: CodeableConcept | undefined;

}