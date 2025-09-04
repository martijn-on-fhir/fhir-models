import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { DomainResource } from './DomainResource';
import { Duration } from './Duration';
import { Element } from './Element';
import { EncounterClassHistory } from './EncounterClassHistory';
import { EncounterDiagnosis } from './EncounterDiagnosis';
import { EncounterHospitalization } from './EncounterHospitalization';
import { EncounterLocation } from './EncounterLocation';
import { EncounterParticipant } from './EncounterParticipant';
import { EncounterStatusHistory } from './EncounterStatusHistory';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 */
export interface Encounter extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Encounter';
  /**
   * The billing system may choose to allocate billable items associated with the Encounter to different referenced Accounts based on internal business rules.
   */
  account?: Reference[] | undefined;
  /**
   * The appointment that scheduled this encounter.
   */
  appointment?: Reference[] | undefined;
  /**
   * The request this encounter satisfies (e.g. incoming referral or procedure request).
   */
  basedOn?: Reference[] | undefined;
  /**
   * Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
   */
  class: Coding;
  /**
   * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
   */
  classHistory?: EncounterClassHistory[] | undefined;
  /**
   * The list of diagnosis relevant to this encounter.
   */
  diagnosis?: EncounterDiagnosis[] | undefined;
  /**
   * Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
   */
  episodeOfCare?: Reference[] | undefined;
  /**
   * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
   * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
   */
  hospitalization?: EncounterHospitalization | undefined;
  /**
   * Identifier(s) by which this encounter is known.
   */
  identifier?: Identifier[] | undefined;
  /**
   * May differ from the time the Encounter.period lasted because of leave of absence.
   */
  length?: Duration | undefined;
  /**
   * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
   */
  location?: EncounterLocation[] | undefined;
  /**
   * The list of people responsible for providing the service.
   */
  participant?: EncounterParticipant[] | undefined;
  /**
   * This is also used for associating a child's encounter back to the mother's encounter.
   * Refer to the Notes section in the Patient resource for further details.
   */
  partOf?: Reference | undefined;
  /**
   * If not (yet) known, the end of the Period may be omitted.
   */
  period?: Period | undefined;
  /**
   * Indicates the urgency of the encounter.
   */
  priority?: CodeableConcept | undefined;
  /**
   * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
   */
  reasonCode?: CodeableConcept[] | undefined;
  /**
   * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
   */
  reasonReference?: Reference[] | undefined;
  /**
   * The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.
   */
  serviceProvider?: Reference | undefined;
  /**
   * Broad categorization of the service that is to be provided (e.g. cardiology).
   */
  serviceType?: CodeableConcept | undefined;
  /**
   * Note that internal business rules will determine the appropriate transitions that may occur between statuses (and also classes).
   */
  status: ('planned'|'arrived'|'triaged'|'in-progress'|'onleave'|'finished'|'cancelled'|'entered-in-error'|'unknown');
  _status?: Element | undefined;
  /**
   * The current status is always found in the current version of the resource, not the status history.
   */
  statusHistory?: EncounterStatusHistory[] | undefined;
  /**
   * While the encounter is always about the patient, the patient might not actually be known in all contexts of use, and there may be a group of patients that could be anonymous (such as in a group therapy for Alcoholics Anonymous - where the recording of the encounter could be used for billing on the number of people/staff and not important to the context of the specific patients) or alternately in veterinary care a herd of sheep receiving treatment (where the animals are not individually tracked).
   */
  subject?: Reference | undefined;
  /**
   * Since there are many ways to further classify encounters, this element is 0..*.
   */
  type?: CodeableConcept[] | undefined;

}