import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Quantity } from './Quantity';

/**
 * A species specific time during which consumption of animal product is not appropriate.
 */
export interface MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends BackboneElement {

  /**
   * Extra information about the withdrawal period.
   */
  supportingInformation?: string | undefined;
  _supportingInformation?: Element | undefined;
  /**
   * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk.
   */
  tissue: CodeableConcept;
  /**
   * A value for the time.
   */
  value: Quantity;

}