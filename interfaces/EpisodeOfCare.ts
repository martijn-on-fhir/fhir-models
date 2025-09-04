import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { EpisodeOfCareDiagnosis } from './EpisodeOfCareDiagnosis';
import { EpisodeOfCareStatusHistory } from './EpisodeOfCareStatusHistory';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 */
export interface EpisodeOfCare extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'EpisodeOfCare';
  /**
   * The billing system may choose to allocate billable items associated with the EpisodeOfCare to different referenced Accounts based on internal business rules.
   */
  account?: Reference[] | undefined;
  /**
   * The practitioner that is the care manager/care coordinator for this patient.
   */
  careManager?: Reference | undefined;
  /**
   * The list of diagnosis relevant to this episode of care.
   */
  diagnosis?: EpisodeOfCareDiagnosis[] | undefined;
  /**
   * The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The organization that has assumed the specific responsibilities for the specified duration.
   */
  managingOrganization?: Reference | undefined;
  /**
   * The patient who is the focus of this episode of care.
   */
  patient: Reference;
  /**
   * The interval during which the managing organization assumes the defined responsibility.
   */
  period?: Period | undefined;
  /**
   * Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
   */
  referralRequest?: Reference[] | undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the episode as not currently valid.
   */
  status: ('planned'|'waitlist'|'active'|'onhold'|'finished'|'cancelled'|'entered-in-error');
  _status?: Element | undefined;
  /**
   * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
   */
  statusHistory?: EpisodeOfCareStatusHistory[] | undefined;
  /**
   * The list of practitioners that may be facilitating this episode of care for specific purposes.
   */
  team?: Reference[] | undefined;
  /**
   * The type can be very important in processing as this could be used in determining if the EpisodeOfCare is relevant to specific government reporting, or other types of classifications.
   */
  type?: CodeableConcept[] | undefined;

}