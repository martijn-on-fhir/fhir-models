import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
export declare class OperationOutcomeIssue extends BackboneElement {
    code?: string;
    _code?: Element;
    details?: CodeableConcept;
    diagnostics?: string;
    _diagnostics?: Element;
    expression?: string[];
    _expression?: Element[];
    location?: string[];
    _location?: Element[];
    severity?: ('fatal' | 'error' | 'warning' | 'information');
    _severity?: Element;
    constructor(source?: Partial<OperationOutcomeIssue>);
}
//# sourceMappingURL=OperationOutcomeIssue.d.ts.map