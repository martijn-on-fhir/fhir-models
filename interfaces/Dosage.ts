import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { DosageDoseAndRate } from './DosageDoseAndRate';
import { Element } from './Element';
import { Quantity } from './Quantity';
import { Ratio } from './Ratio';
import { Timing } from './Timing';

/**
 * Indicates how the medication is/was taken or should be taken by the patient.
 */
export interface Dosage extends BackboneElement {

  /**
   * Information about administration or preparation of the medication (e.g. "infuse as rapidly as possibly via intraperitoneal port" or "immediately following drug x") should be populated in dosage.text.
   */
  additionalInstruction?: CodeableConcept[] | undefined;
  /**
   * Can express "as needed" without a reason by setting the Boolean = True.  In this case the CodeableConcept is not populated.  Or you can express "as needed" with a reason by including the CodeableConcept.  In this case the Boolean is assumed to be True.  If you set the Boolean to False, then the dose is given according to the schedule and is not "prn" or "as needed".
   */
  asNeededBoolean?: boolean | undefined;
  _asNeededBoolean?: Element | undefined;
  /**
   * Can express "as needed" without a reason by setting the Boolean = True.  In this case the CodeableConcept is not populated.  Or you can express "as needed" with a reason by including the CodeableConcept.  In this case the Boolean is assumed to be True.  If you set the Boolean to False, then the dose is given according to the schedule and is not "prn" or "as needed".
   */
  asNeededCodeableConcept?: CodeableConcept | undefined;
  /**
   * The amount of medication administered.
   */
  doseAndRate?: DosageDoseAndRate[] | undefined;
  /**
   * This is intended for use as an adjunct to the dosage when there is an upper cap.  For example, a body surface area related dose with a maximum amount, such as 1.5 mg/m2 (maximum 2 mg) IV over 5 – 10 minutes would have doseQuantity of 1.5 mg/m2 and maxDosePerAdministration of 2 mg.
   */
  maxDosePerAdministration?: Quantity | undefined;
  /**
   * Upper limit on medication per lifetime of the patient.
   */
  maxDosePerLifetime?: Quantity | undefined;
  /**
   * This is intended for use as an adjunct to the dosage when there is an upper cap.  For example "2 tablets every 4 hours to a maximum of 8/day".
   */
  maxDosePerPeriod?: Ratio | undefined;
  /**
   * Terminologies used often pre-coordinate this term with the route and or form of administration.
   */
  method?: CodeableConcept | undefined;
  /**
   * Instructions in terms that are understood by the patient or consumer.
   */
  patientInstruction?: string | undefined;
  _patientInstruction?: Element | undefined;
  /**
   * How drug should enter body.
   */
  route?: CodeableConcept | undefined;
  /**
   * Indicates the order in which the dosage instructions should be applied or interpreted.
   */
  sequence?: number | undefined;
  /**
   * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  site?: CodeableConcept | undefined;
  /**
   * Free text dosage instructions e.g. SIG.
   */
  text?: string | undefined;
  _text?: Element | undefined;
  /**
   * This attribute might not always be populated while the Dosage.text is expected to be populated.  If both are populated, then the Dosage.text should reflect the content of the Dosage.timing.
   */
  timing?: Timing | undefined;

}