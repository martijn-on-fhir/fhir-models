import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod } from './MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod';

/**
 * A species for which this route applies.
 */
export interface MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends BackboneElement {

  /**
   * Coded expression for the species.
   */
  code: CodeableConcept;
  /**
   * A species specific time during which consumption of animal product is not appropriate.
   */
  withdrawalPeriod?: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod[] | undefined;

}