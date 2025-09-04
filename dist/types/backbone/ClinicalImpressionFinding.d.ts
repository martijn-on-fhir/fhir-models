import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class ClinicalImpressionFinding extends BackboneElement {
    basis?: string;
    _basis?: Element;
    itemCodeableConcept?: CodeableConcept;
    itemReference?: Reference;
    constructor(source?: Partial<ClinicalImpressionFinding>);
}
//# sourceMappingURL=ClinicalImpressionFinding.d.ts.map