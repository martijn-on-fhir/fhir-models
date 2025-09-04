import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class ProcedurePerformer extends BackboneElement {
    actor?: Reference;
    function?: CodeableConcept;
    onBehalfOf?: Reference;
    constructor(source?: Partial<ProcedurePerformer>);
}
//# sourceMappingURL=ProcedurePerformer.d.ts.map