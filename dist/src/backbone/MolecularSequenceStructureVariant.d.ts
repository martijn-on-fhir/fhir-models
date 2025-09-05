import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MolecularSequenceStructureVariantInner } from './MolecularSequenceStructureVariantInner';
import { MolecularSequenceStructureVariantOuter } from './MolecularSequenceStructureVariantOuter';
export declare class MolecularSequenceStructureVariant extends BackboneElement {
    exact?: boolean;
    _exact?: Element;
    inner?: MolecularSequenceStructureVariantInner;
    length?: number;
    outer?: MolecularSequenceStructureVariantOuter;
    variantType?: CodeableConcept;
    constructor(source?: Partial<MolecularSequenceStructureVariant>);
}
//# sourceMappingURL=MolecularSequenceStructureVariant.d.ts.map