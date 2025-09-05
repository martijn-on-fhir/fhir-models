import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Address } from '../elements/Address';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class ClaimAccident extends BackboneElement {
    date?: string;
    _date?: Element;
    locationAddress?: Address;
    locationReference?: Reference;
    type?: CodeableConcept;
    constructor(source?: Partial<ClaimAccident>);
}
//# sourceMappingURL=ClaimAccident.d.ts.map