import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MolecularSequenceQualityRoc } from './MolecularSequenceQualityRoc';
import { Quantity } from '../elements/Quantity';
export declare class MolecularSequenceQuality extends BackboneElement {
    end?: number;
    fScore?: number;
    gtFP?: number;
    method?: CodeableConcept;
    precision?: number;
    queryFP?: number;
    queryTP?: number;
    recall?: number;
    roc?: MolecularSequenceQualityRoc;
    score?: Quantity;
    standardSequence?: CodeableConcept;
    start?: number;
    truthFN?: number;
    truthTP?: number;
    type?: ('indel' | 'snp' | 'unknown');
    _type?: Element;
    constructor(source?: Partial<MolecularSequenceQuality>);
}
//# sourceMappingURL=MolecularSequenceQuality.d.ts.map