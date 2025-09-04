import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class SubstanceReferenceInformationGene extends BackboneElement {
    gene?: CodeableConcept;
    geneSequenceOrigin?: CodeableConcept;
    source?: Reference[];
    constructor(source?: Partial<SubstanceReferenceInformationGene>);
}
//# sourceMappingURL=SubstanceReferenceInformationGene.d.ts.map