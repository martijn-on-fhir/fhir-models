import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Reference } from '../elements/Reference';
export declare class MolecularSequenceVariant extends BackboneElement {
    cigar?: string;
    _cigar?: Element;
    end?: number;
    observedAllele?: string;
    _observedAllele?: Element;
    referenceAllele?: string;
    _referenceAllele?: Element;
    start?: number;
    variantPointer?: Reference;
    constructor(source?: Partial<MolecularSequenceVariant>);
}
//# sourceMappingURL=MolecularSequenceVariant.d.ts.map