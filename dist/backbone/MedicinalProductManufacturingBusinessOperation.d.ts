import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class MedicinalProductManufacturingBusinessOperation extends BackboneElement {
    authorisationReferenceNumber?: Identifier;
    confidentialityIndicator?: CodeableConcept;
    effectiveDate?: string;
    _effectiveDate?: Element;
    manufacturer?: Reference[];
    operationType?: CodeableConcept;
    regulator?: Reference;
    constructor(source?: Partial<MedicinalProductManufacturingBusinessOperation>);
}
//# sourceMappingURL=MedicinalProductManufacturingBusinessOperation.d.ts.map