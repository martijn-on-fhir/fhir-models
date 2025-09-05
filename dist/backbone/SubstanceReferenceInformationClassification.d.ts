import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class SubstanceReferenceInformationClassification extends BackboneElement {
    classification?: CodeableConcept;
    domain?: CodeableConcept;
    source?: Reference[];
    subtype?: CodeableConcept[];
    constructor(source?: Partial<SubstanceReferenceInformationClassification>);
}
//# sourceMappingURL=SubstanceReferenceInformationClassification.d.ts.map