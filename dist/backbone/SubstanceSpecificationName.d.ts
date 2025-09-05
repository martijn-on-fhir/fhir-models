import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
import { SubstanceSpecificationNameOfficial } from './SubstanceSpecificationNameOfficial';
export declare class SubstanceSpecificationName extends BackboneElement {
    domain?: CodeableConcept[];
    jurisdiction?: CodeableConcept[];
    language?: CodeableConcept[];
    name?: string;
    _name?: Element;
    official?: SubstanceSpecificationNameOfficial[];
    preferred?: boolean;
    _preferred?: Element;
    source?: Reference[];
    status?: CodeableConcept;
    synonym?: SubstanceSpecificationName[];
    translation?: SubstanceSpecificationName[];
    type?: CodeableConcept;
    constructor(source?: Partial<SubstanceSpecificationName>);
}
//# sourceMappingURL=SubstanceSpecificationName.d.ts.map