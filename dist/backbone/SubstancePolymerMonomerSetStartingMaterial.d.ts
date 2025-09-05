import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { SubstanceAmount } from './SubstanceAmount';
export declare class SubstancePolymerMonomerSetStartingMaterial extends BackboneElement {
    amount?: SubstanceAmount;
    isDefining?: boolean;
    _isDefining?: Element;
    material?: CodeableConcept;
    type?: CodeableConcept;
    constructor(source?: Partial<SubstancePolymerMonomerSetStartingMaterial>);
}
//# sourceMappingURL=SubstancePolymerMonomerSetStartingMaterial.d.ts.map