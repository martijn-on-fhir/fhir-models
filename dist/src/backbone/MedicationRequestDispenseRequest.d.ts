import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Duration } from '../elements/Duration';
import { MedicationRequestDispenseRequestInitialFill } from './MedicationRequestDispenseRequestInitialFill';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class MedicationRequestDispenseRequest extends BackboneElement {
    dispenseInterval?: Duration;
    expectedSupplyDuration?: Duration;
    initialFill?: MedicationRequestDispenseRequestInitialFill;
    numberOfRepeatsAllowed?: number;
    performer?: Reference;
    quantity?: Quantity;
    validityPeriod?: Period;
    constructor(source?: Partial<MedicationRequestDispenseRequest>);
}
//# sourceMappingURL=MedicationRequestDispenseRequest.d.ts.map