import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class ContractTermAssetContext extends BackboneElement {
    code?: CodeableConcept[];
    reference?: Reference;
    text?: string;
    _text?: Element;
    constructor(source?: Partial<ContractTermAssetContext>);
}
//# sourceMappingURL=ContractTermAssetContext.d.ts.map