import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Duration } from '../elements/Duration';
import { MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies } from './MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies';
import { Quantity } from '../elements/Quantity';
import { Ratio } from '../elements/Ratio';
export declare class MedicinalProductPharmaceuticalRouteOfAdministration extends BackboneElement {
    code?: CodeableConcept;
    firstDose?: Quantity;
    maxDosePerDay?: Quantity;
    maxDosePerTreatmentPeriod?: Ratio;
    maxSingleDose?: Quantity;
    maxTreatmentPeriod?: Duration;
    targetSpecies?: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[];
    constructor(source?: Partial<MedicinalProductPharmaceuticalRouteOfAdministration>);
}
//# sourceMappingURL=MedicinalProductPharmaceuticalRouteOfAdministration.d.ts.map