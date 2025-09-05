import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeSystemConceptDesignation } from './CodeSystemConceptDesignation';
import { CodeSystemConceptProperty } from './CodeSystemConceptProperty';
export declare class CodeSystemConcept extends BackboneElement {
    code?: string;
    _code?: Element;
    concept?: CodeSystemConcept[];
    definition?: string;
    _definition?: Element;
    designation?: CodeSystemConceptDesignation[];
    display?: string;
    _display?: Element;
    property?: CodeSystemConceptProperty[];
    constructor(source?: Partial<CodeSystemConcept>);
}
//# sourceMappingURL=CodeSystemConcept.d.ts.map