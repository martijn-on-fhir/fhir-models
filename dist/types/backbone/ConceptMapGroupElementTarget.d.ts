import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { ConceptMapGroupElementTargetDependsOn } from './ConceptMapGroupElementTargetDependsOn';
export declare class ConceptMapGroupElementTarget extends BackboneElement {
    code?: string;
    _code?: Element;
    comment?: string;
    _comment?: Element;
    dependsOn?: ConceptMapGroupElementTargetDependsOn[];
    display?: string;
    _display?: Element;
    equivalence?: ('relatedto' | 'equivalent' | 'equal' | 'wider' | 'subsumes' | 'narrower' | 'specializes' | 'inexact' | 'unmatched' | 'disjoint');
    _equivalence?: Element;
    product?: ConceptMapGroupElementTargetDependsOn[];
    constructor(source?: Partial<ConceptMapGroupElementTarget>);
}
//# sourceMappingURL=ConceptMapGroupElementTarget.d.ts.map