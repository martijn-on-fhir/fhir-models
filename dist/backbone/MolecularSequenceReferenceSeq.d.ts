import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class MolecularSequenceReferenceSeq extends BackboneElement {
    chromosome?: CodeableConcept;
    genomeBuild?: string;
    _genomeBuild?: Element;
    orientation?: ('sense' | 'antisense');
    _orientation?: Element;
    referenceSeqId?: CodeableConcept;
    referenceSeqPointer?: Reference;
    referenceSeqString?: string;
    _referenceSeqString?: Element;
    strand?: ('watson' | 'crick');
    _strand?: Element;
    windowEnd?: number;
    windowStart?: number;
    constructor(source?: Partial<MolecularSequenceReferenceSeq>);
}
//# sourceMappingURL=MolecularSequenceReferenceSeq.d.ts.map