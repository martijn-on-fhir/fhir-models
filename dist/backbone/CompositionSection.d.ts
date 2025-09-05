import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Narrative } from '../elements/Narrative';
import { Reference } from '../elements/Reference';
export declare class CompositionSection extends BackboneElement {
    author?: Reference[];
    code?: CodeableConcept;
    emptyReason?: CodeableConcept;
    entry?: Reference[];
    focus?: Reference;
    mode?: ('working' | 'snapshot' | 'changes');
    _mode?: Element;
    orderedBy?: CodeableConcept;
    section?: CompositionSection[];
    text?: Narrative;
    title?: string;
    _title?: Element;
    constructor(source?: Partial<CompositionSection>);
}
//# sourceMappingURL=CompositionSection.d.ts.map