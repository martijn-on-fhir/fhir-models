import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class MedicationAdministrationPerformer extends BackboneElement {
    actor?: Reference;
    function?: CodeableConcept;
    constructor(source?: Partial<MedicationAdministrationPerformer>);
}
//# sourceMappingURL=MedicationAdministrationPerformer.d.ts.map