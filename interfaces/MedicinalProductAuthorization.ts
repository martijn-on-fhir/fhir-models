import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { MedicinalProductAuthorizationJurisdictionalAuthorization } from './MedicinalProductAuthorizationJurisdictionalAuthorization';
import { MedicinalProductAuthorizationProcedure } from './MedicinalProductAuthorizationProcedure';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * The regulatory authorization of a medicinal product.
 */
export interface MedicinalProductAuthorization extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'MedicinalProductAuthorization';
  /**
   * The country in which the marketing authorization has been granted.
   */
  country?: CodeableConcept[] | undefined;
  /**
   * A period of time after authorization before generic product applicatiosn can be submitted.
   */
  dataExclusivityPeriod?: Period | undefined;
  /**
   * The date when the first authorization was granted by a Medicines Regulatory Agency.
   */
  dateOfFirstAuthorization?: string | undefined;
  _dateOfFirstAuthorization?: Element | undefined;
  /**
   * Marketing Authorization Holder.
   */
  holder?: Reference | undefined;
  /**
   * Business identifier for the marketing authorization, as assigned by a regulator.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Date of first marketing authorization for a company's new medicinal product in any country in the World.
   */
  internationalBirthDate?: string | undefined;
  _internationalBirthDate?: Element | undefined;
  /**
   * Jurisdiction within a country.
   */
  jurisdiction?: CodeableConcept[] | undefined;
  /**
   * Authorization in areas within a country.
   */
  jurisdictionalAuthorization?: MedicinalProductAuthorizationJurisdictionalAuthorization[] | undefined;
  /**
   * The legal framework against which this authorization is granted.
   */
  legalBasis?: CodeableConcept | undefined;
  /**
   * The regulatory procedure for granting or amending a marketing authorization.
   */
  procedure?: MedicinalProductAuthorizationProcedure | undefined;
  /**
   * Medicines Regulatory Agency.
   */
  regulator?: Reference | undefined;
  /**
   * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored.
   */
  restoreDate?: string | undefined;
  _restoreDate?: Element | undefined;
  /**
   * The status of the marketing authorization.
   */
  status?: CodeableConcept | undefined;
  /**
   * The date at which the given status has become applicable.
   */
  statusDate?: string | undefined;
  _statusDate?: Element | undefined;
  /**
   * The medicinal product that is being authorized.
   */
  subject?: Reference | undefined;
  /**
   * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format.
   */
  validityPeriod?: Period | undefined;

}