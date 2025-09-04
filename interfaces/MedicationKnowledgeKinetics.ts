import { BackboneElement } from './BackboneElement';
import { Duration } from './Duration';
import { Quantity } from './Quantity';

/**
 * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
 */
export interface MedicationKnowledgeKinetics extends BackboneElement {

  /**
   * The drug concentration measured at certain discrete points in time.
   */
  areaUnderCurve?: Quantity[] | undefined;
  /**
   * The time required for any specified property (e.g., the concentration of a substance in the body) to decrease by half.
   */
  halfLifePeriod?: Duration | undefined;
  /**
   * The median lethal dose of a drug.
   */
  lethalDose50?: Quantity[] | undefined;

}