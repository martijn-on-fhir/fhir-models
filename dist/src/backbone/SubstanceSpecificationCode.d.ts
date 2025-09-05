import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class SubstanceSpecificationCode extends BackboneElement {
    code?: CodeableConcept;
    comment?: string;
    _comment?: Element;
    source?: Reference[];
    status?: CodeableConcept;
    statusDate?: string;
    _statusDate?: Element;
    constructor(source?: Partial<SubstanceSpecificationCode>);
}
//# sourceMappingURL=SubstanceSpecificationCode.d.ts.map