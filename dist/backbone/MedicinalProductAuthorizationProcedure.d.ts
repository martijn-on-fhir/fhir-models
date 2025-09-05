import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
export declare class MedicinalProductAuthorizationProcedure extends BackboneElement {
    application?: MedicinalProductAuthorizationProcedure[];
    datePeriod?: Period;
    dateDateTime?: string;
    _dateDateTime?: Element;
    identifier?: Identifier;
    type?: CodeableConcept;
    constructor(source?: Partial<MedicinalProductAuthorizationProcedure>);
}
//# sourceMappingURL=MedicinalProductAuthorizationProcedure.d.ts.map