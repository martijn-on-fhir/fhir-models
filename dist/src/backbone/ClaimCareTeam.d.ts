import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class ClaimCareTeam extends BackboneElement {
    provider?: Reference;
    qualification?: CodeableConcept;
    responsible?: boolean;
    _responsible?: Element;
    role?: CodeableConcept;
    sequence?: number;
    constructor(source?: Partial<ClaimCareTeam>);
}
//# sourceMappingURL=ClaimCareTeam.d.ts.map