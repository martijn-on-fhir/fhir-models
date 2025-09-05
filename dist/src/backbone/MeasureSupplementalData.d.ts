import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Expression } from '../elements/Expression';
export declare class MeasureSupplementalData extends BackboneElement {
    code?: CodeableConcept;
    criteria?: Expression;
    description?: string;
    _description?: Element;
    usage?: CodeableConcept[];
    constructor(source?: Partial<MeasureSupplementalData>);
}
//# sourceMappingURL=MeasureSupplementalData.d.ts.map