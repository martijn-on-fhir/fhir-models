import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { Ratio } from '../elements/Ratio';
export declare class MedicationAdministrationDosage extends BackboneElement {
    dose?: Quantity;
    method?: CodeableConcept;
    rateRatio?: Ratio;
    rateQuantity?: Quantity;
    route?: CodeableConcept;
    site?: CodeableConcept;
    text?: string;
    _text?: Element;
    constructor(source?: Partial<MedicationAdministrationDosage>);
}
//# sourceMappingURL=MedicationAdministrationDosage.d.ts.map