import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Quantity } from './Quantity';
import { Ratio } from './Ratio';

/**
 * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
 */
export interface MedicationAdministrationDosage extends BackboneElement {

  /**
   * If the administration is not instantaneous (rate is present), this can be specified to convey the total amount administered over period of time of a single administration.
   */
  dose?: Quantity | undefined;
  /**
   * One of the reasons this attribute is not used often, is that the method is often pre-coordinated with the route and/or form of administration.  This means the codes used in route or form may pre-coordinate the method in the route code or the form code.  The implementation decision about what coding system to use for route or form code will determine how frequently the method code will be populated e.g. if route or form code pre-coordinate method code, then this attribute will not be populated often; if there is no pre-coordination then method code may  be used frequently.
   */
  method?: CodeableConcept | undefined;
  /**
   * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
   */
  rateRatio?: Ratio | undefined;
  /**
   * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
   */
  rateQuantity?: Quantity | undefined;
  /**
   * A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.
   */
  route?: CodeableConcept | undefined;
  /**
   * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  site?: CodeableConcept | undefined;
  /**
   * Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.
   * The dosage instructions should reflect the dosage of the medication that was administered.
   */
  text?: string | undefined;
  _text?: Element | undefined;

}