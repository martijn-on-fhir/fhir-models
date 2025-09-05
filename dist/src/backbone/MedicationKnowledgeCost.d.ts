import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';
export declare class MedicationKnowledgeCost extends BackboneElement {
    cost?: Money;
    source?: string;
    _source?: Element;
    type?: CodeableConcept;
    constructor(source?: Partial<MedicationKnowledgeCost>);
}
//# sourceMappingURL=MedicationKnowledgeCost.d.ts.map