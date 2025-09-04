import { BackboneElement } from './BackboneElement';
import { Duration } from './Duration';
import { MedicationRequestDispenseRequestInitialFill } from './MedicationRequestDispenseRequestInitialFill';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
 */
export interface MedicationRequestDispenseRequest extends BackboneElement {

  /**
   * The minimum period of time that must occur between dispenses of the medication.
   */
  dispenseInterval?: Duration | undefined;
  /**
   * In some situations, this attribute may be used instead of quantity to identify the amount supplied by how long it is expected to last, rather than the physical quantity issued, e.g. 90 days supply of medication (based on an ordered dosage). When possible, it is always better to specify quantity, as this tends to be more precise. expectedSupplyDuration will always be an estimate that can be influenced by external factors.
   */
  expectedSupplyDuration?: Duration | undefined;
  /**
   * If populating this element, either the quantity or the duration must be included.
   */
  initialFill?: MedicationRequestDispenseRequestInitialFill | undefined;
  /**
   * If displaying "number of authorized fills", add 1 to this number.
   */
  numberOfRepeatsAllowed?: number | undefined;
  /**
   * Indicates the intended dispensing Organization specified by the prescriber.
   */
  performer?: Reference | undefined;
  /**
   * The amount that is to be dispensed for one fill.
   */
  quantity?: Quantity | undefined;
  /**
   * It reflects the prescribers' perspective for the validity of the prescription. Dispenses must not be made against the prescription outside of this period. The lower-bound of the Dispensing Window signifies the earliest date that the prescription can be filled for the first time. If an upper-bound is not specified then the Prescription is open-ended or will default to a stale-date based on regulations.
   */
  validityPeriod?: Period | undefined;

}