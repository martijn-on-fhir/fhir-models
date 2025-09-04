import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { MedicationBatch } from '../backbone/MedicationBatch';
import { MedicationIngredient } from '../backbone/MedicationIngredient';
import { Ratio } from '../elements/Ratio';
import { Reference } from '../elements/Reference';
export declare class Medication extends DomainResource {
    readonly resourceType: "Medication";
    amount?: Ratio;
    batch?: MedicationBatch;
    code?: CodeableConcept;
    form?: CodeableConcept;
    identifier?: Identifier[];
    ingredient?: MedicationIngredient[];
    manufacturer?: Reference;
    status?: ('active' | 'inactive' | 'entered-in-error');
    _status?: Element;
    constructor(source?: Partial<Medication>);
}
//# sourceMappingURL=Medication.d.ts.map