import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class CompositionEvent extends BackboneElement {
    code?: CodeableConcept[];
    detail?: Reference[];
    period?: Period;
    constructor(source?: Partial<CompositionEvent>);
}
//# sourceMappingURL=CompositionEvent.d.ts.map