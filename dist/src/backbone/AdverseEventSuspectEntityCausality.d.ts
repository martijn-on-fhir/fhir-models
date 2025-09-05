import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class AdverseEventSuspectEntityCausality extends BackboneElement {
    assessment?: CodeableConcept;
    author?: Reference;
    method?: CodeableConcept;
    productRelatedness?: string;
    _productRelatedness?: Element;
    constructor(source?: Partial<AdverseEventSuspectEntityCausality>);
}
//# sourceMappingURL=AdverseEventSuspectEntityCausality.d.ts.map