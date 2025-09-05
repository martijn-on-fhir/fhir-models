import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class SpecimenContainer extends BackboneElement {
    additiveCodeableConcept?: CodeableConcept;
    additiveReference?: Reference;
    capacity?: Quantity;
    description?: string;
    _description?: Element;
    identifier?: Identifier[];
    specimenQuantity?: Quantity;
    type?: CodeableConcept;
    constructor(source?: Partial<SpecimenContainer>);
}
//# sourceMappingURL=SpecimenContainer.d.ts.map