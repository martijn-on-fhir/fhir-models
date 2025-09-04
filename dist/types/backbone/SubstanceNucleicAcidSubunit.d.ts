import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { SubstanceNucleicAcidSubunitLinkage } from './SubstanceNucleicAcidSubunitLinkage';
import { SubstanceNucleicAcidSubunitSugar } from './SubstanceNucleicAcidSubunitSugar';
export declare class SubstanceNucleicAcidSubunit extends BackboneElement {
    fivePrime?: CodeableConcept;
    length?: number;
    linkage?: SubstanceNucleicAcidSubunitLinkage[];
    sequence?: string;
    _sequence?: Element;
    sequenceAttachment?: Attachment;
    subunit?: number;
    sugar?: SubstanceNucleicAcidSubunitSugar[];
    threePrime?: CodeableConcept;
    constructor(source?: Partial<SubstanceNucleicAcidSubunit>);
}
//# sourceMappingURL=SubstanceNucleicAcidSubunit.d.ts.map