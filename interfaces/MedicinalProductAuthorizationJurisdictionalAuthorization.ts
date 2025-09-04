import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Identifier } from './Identifier';
import { Period } from './Period';

/**
 * Authorization in areas within a country.
 */
export interface MedicinalProductAuthorizationJurisdictionalAuthorization extends BackboneElement {

  /**
   * Country of authorization.
   */
  country?: CodeableConcept | undefined;
  /**
   * The assigned number for the marketing authorization.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Jurisdiction within a country.
   */
  jurisdiction?: CodeableConcept[] | undefined;
  /**
   * The legal status of supply in a jurisdiction or region.
   */
  legalStatusOfSupply?: CodeableConcept | undefined;
  /**
   * The start and expected end date of the authorization.
   */
  validityPeriod?: Period | undefined;

}