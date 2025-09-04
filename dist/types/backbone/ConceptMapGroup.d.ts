import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { ConceptMapGroupElement } from './ConceptMapGroupElement';
import { ConceptMapGroupUnmapped } from './ConceptMapGroupUnmapped';
export declare class ConceptMapGroup extends BackboneElement {
    element?: ConceptMapGroupElement[];
    source?: string;
    _source?: Element;
    sourceVersion?: string;
    _sourceVersion?: Element;
    target?: string;
    _target?: Element;
    targetVersion?: string;
    _targetVersion?: Element;
    unmapped?: ConceptMapGroupUnmapped;
    constructor(source?: Partial<ConceptMapGroup>);
}
//# sourceMappingURL=ConceptMapGroup.d.ts.map