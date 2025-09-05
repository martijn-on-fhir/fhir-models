import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class SubstanceReferenceInformationGeneElement extends BackboneElement {
    element?: Identifier;
    source?: Reference[];
    type?: CodeableConcept;
    constructor(source?: Partial<SubstanceReferenceInformationGeneElement>);
}
//# sourceMappingURL=SubstanceReferenceInformationGeneElement.d.ts.map