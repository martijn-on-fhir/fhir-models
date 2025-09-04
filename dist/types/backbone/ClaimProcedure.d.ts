import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class ClaimProcedure extends BackboneElement {
    date?: string;
    _date?: Element;
    procedureCodeableConcept?: CodeableConcept;
    procedureReference?: Reference;
    sequence?: number;
    type?: CodeableConcept[];
    udi?: Reference[];
    constructor(source?: Partial<ClaimProcedure>);
}
//# sourceMappingURL=ClaimProcedure.d.ts.map