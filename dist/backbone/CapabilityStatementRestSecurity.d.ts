import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
export declare class CapabilityStatementRestSecurity extends BackboneElement {
    cors?: boolean;
    _cors?: Element;
    description?: string;
    _description?: Element;
    service?: CodeableConcept[];
    constructor(source?: Partial<CapabilityStatementRestSecurity>);
}
//# sourceMappingURL=CapabilityStatementRestSecurity.d.ts.map