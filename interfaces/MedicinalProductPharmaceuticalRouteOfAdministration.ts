import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Duration } from './Duration';
import { MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies } from './MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies';
import { Quantity } from './Quantity';
import { Ratio } from './Ratio';

/**
 * The path by which the pharmaceutical product is taken into or makes contact with the body.
 */
export interface MedicinalProductPharmaceuticalRouteOfAdministration extends BackboneElement {

  /**
   * Coded expression for the route.
   */
  code: CodeableConcept;
  /**
   * The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement.
   */
  firstDose?: Quantity | undefined;
  /**
   * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  maxDosePerDay?: Quantity | undefined;
  /**
   * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  maxDosePerTreatmentPeriod?: Ratio | undefined;
  /**
   * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement.
   */
  maxSingleDose?: Quantity | undefined;
  /**
   * The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  maxTreatmentPeriod?: Duration | undefined;
  /**
   * A species for which this route applies.
   */
  targetSpecies?: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[] | undefined;

}