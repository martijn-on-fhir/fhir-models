import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class MedicationDispenseSubstitution extends BackboneElement {
    reason?: CodeableConcept[];
    responsibleParty?: Reference[];
    type?: CodeableConcept;
    wasSubstituted?: boolean;
    _wasSubstituted?: Element;
    constructor(source?: Partial<MedicationDispenseSubstitution>);
}
//# sourceMappingURL=MedicationDispenseSubstitution.d.ts.map