import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { ListEntry } from '../backbone/ListEntry';
import { Reference } from '../elements/Reference';
export declare class List extends DomainResource {
    readonly resourceType: "List";
    code?: CodeableConcept;
    date?: string;
    _date?: Element;
    emptyReason?: CodeableConcept;
    encounter?: Reference;
    entry?: ListEntry[];
    identifier?: Identifier[];
    mode?: ('working' | 'snapshot' | 'changes');
    _mode?: Element;
    note?: Annotation[];
    orderedBy?: CodeableConcept;
    source?: Reference;
    status?: ('current' | 'retired' | 'entered-in-error');
    _status?: Element;
    subject?: Reference;
    title?: string;
    _title?: Element;
    constructor(source?: Partial<List>);
}
//# sourceMappingURL=List.d.ts.map