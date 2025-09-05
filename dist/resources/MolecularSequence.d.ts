import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Identifier } from '../elements/Identifier';
import { MolecularSequenceQuality } from '../backbone/MolecularSequenceQuality';
import { MolecularSequenceReferenceSeq } from '../backbone/MolecularSequenceReferenceSeq';
import { MolecularSequenceRepository } from '../backbone/MolecularSequenceRepository';
import { MolecularSequenceStructureVariant } from '../backbone/MolecularSequenceStructureVariant';
import { MolecularSequenceVariant } from '../backbone/MolecularSequenceVariant';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class MolecularSequence extends DomainResource {
    readonly resourceType: "MolecularSequence";
    coordinateSystem?: number;
    device?: Reference;
    identifier?: Identifier[];
    observedSeq?: string;
    _observedSeq?: Element;
    patient?: Reference;
    performer?: Reference;
    pointer?: Reference[];
    quality?: MolecularSequenceQuality[];
    quantity?: Quantity;
    readCoverage?: number;
    referenceSeq?: MolecularSequenceReferenceSeq;
    repository?: MolecularSequenceRepository[];
    specimen?: Reference;
    structureVariant?: MolecularSequenceStructureVariant[];
    type?: ('aa' | 'dna' | 'rna');
    _type?: Element;
    variant?: MolecularSequenceVariant[];
    constructor(source?: Partial<MolecularSequence>);
}
//# sourceMappingURL=MolecularSequence.d.ts.map