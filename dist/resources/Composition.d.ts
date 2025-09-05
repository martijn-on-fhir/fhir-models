import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { CompositionAttester } from '../backbone/CompositionAttester';
import { CompositionEvent } from '../backbone/CompositionEvent';
import { CompositionRelatesTo } from '../backbone/CompositionRelatesTo';
import { CompositionSection } from '../backbone/CompositionSection';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class Composition extends DomainResource {
    readonly resourceType: "Composition";
    attester?: CompositionAttester[];
    author?: Reference[];
    category?: CodeableConcept[];
    confidentiality?: string;
    _confidentiality?: Element;
    custodian?: Reference;
    date?: string;
    _date?: Element;
    encounter?: Reference;
    event?: CompositionEvent[];
    identifier?: Identifier;
    relatesTo?: CompositionRelatesTo[];
    section?: CompositionSection[];
    status?: ('preliminary' | 'final' | 'amended' | 'entered-in-error');
    _status?: Element;
    subject?: Reference;
    title?: string;
    _title?: Element;
    type?: CodeableConcept;
    constructor(source?: Partial<Composition>);
}
//# sourceMappingURL=Composition.d.ts.map