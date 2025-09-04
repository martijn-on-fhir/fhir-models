import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { InsurancePlanContact } from './InsurancePlanContact';
import { InsurancePlanCoverage } from './InsurancePlanCoverage';
import { InsurancePlanPlan } from './InsurancePlanPlan';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export interface InsurancePlan extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'InsurancePlan';
  /**
   * An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner.
   */
  administeredBy?: Reference | undefined;
  /**
   * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the product/plan.
   */
  alias?: string[] | undefined;
  _alias?: Element[] | undefined;
  /**
   * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
   */
  contact?: InsurancePlanContact[] | undefined;
  /**
   * Details about the coverage offered by the insurance product.
   */
  coverage?: InsurancePlanCoverage[] | undefined;
  /**
   * The geographic region in which a health insurance product's benefits apply.
   */
  coverageArea?: Reference[] | undefined;
  /**
   * The technical endpoints providing access to services operated for the health insurance product.
   */
  endpoint?: Reference[] | undefined;
  /**
   * Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: Identifier[] | undefined;
  /**
   * If the name of the product/plan changes, consider putting the old name in the alias column so that it can still be located through searches.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  network?: Reference[] | undefined;
  /**
   * The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'.
   */
  ownedBy?: Reference | undefined;
  /**
   * The period of time that the health insurance product is available.
   */
  period?: Period | undefined;
  /**
   * Details about an insurance plan.
   */
  plan?: InsurancePlanPlan[] | undefined;
  /**
   * The current state of the health insurance product.
   */
  status?: ('draft'|'active'|'retired'|'unknown') | undefined;
  _status?: Element | undefined;
  /**
   * The kind of health insurance product.
   */
  type?: CodeableConcept[] | undefined;

}