import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class ProvenanceAgent extends BackboneElement {
    onBehalfOf?: Reference;
    role?: CodeableConcept[];
    type?: CodeableConcept;
    who?: Reference;
    constructor(source?: Partial<ProvenanceAgent>);
}
//# sourceMappingURL=ProvenanceAgent.d.ts.map