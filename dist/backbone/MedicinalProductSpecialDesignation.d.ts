import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class MedicinalProductSpecialDesignation extends BackboneElement {
    date?: string;
    _date?: Element;
    identifier?: Identifier[];
    indicationCodeableConcept?: CodeableConcept;
    indicationReference?: Reference;
    intendedUse?: CodeableConcept;
    species?: CodeableConcept;
    status?: CodeableConcept;
    type?: CodeableConcept;
    constructor(source?: Partial<MedicinalProductSpecialDesignation>);
}
//# sourceMappingURL=MedicinalProductSpecialDesignation.d.ts.map