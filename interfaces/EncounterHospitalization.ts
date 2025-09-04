import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
 * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
 */
export interface EncounterHospitalization extends BackboneElement {

  /**
   * From where patient was admitted (physician referral, transfer).
   */
  admitSource?: CodeableConcept | undefined;
  /**
   * Location/organization to which the patient is discharged.
   */
  destination?: Reference | undefined;
  /**
   * For example, a patient may request both a dairy-free and nut-free diet preference (not mutually exclusive).
   */
  dietPreference?: CodeableConcept[] | undefined;
  /**
   * Category or kind of location after discharge.
   */
  dischargeDisposition?: CodeableConcept | undefined;
  /**
   * The location/organization from which the patient came before admission.
   */
  origin?: Reference | undefined;
  /**
   * Pre-admission identifier.
   */
  preAdmissionIdentifier?: Identifier | undefined;
  /**
   * Whether this hospitalization is a readmission and why if known.
   */
  reAdmission?: CodeableConcept | undefined;
  /**
   * Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.
   */
  specialArrangement?: CodeableConcept[] | undefined;
  /**
   * Special courtesies (VIP, board member).
   */
  specialCourtesy?: CodeableConcept[] | undefined;

}