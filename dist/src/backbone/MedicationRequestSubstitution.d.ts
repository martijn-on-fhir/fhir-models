import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
export declare class MedicationRequestSubstitution extends BackboneElement {
    allowedBoolean?: boolean;
    _allowedBoolean?: Element;
    allowedCodeableConcept?: CodeableConcept;
    reason?: CodeableConcept;
    constructor(source?: Partial<MedicationRequestSubstitution>);
}
//# sourceMappingURL=MedicationRequestSubstitution.d.ts.map