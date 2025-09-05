import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import { TaskInput } from '../backbone/TaskInput';
export declare class Task extends DomainResource {
    readonly resourceType: "Task";
    authoredOn?: string;
    _authoredOn?: Element;
    basedOn?: Reference[];
    businessStatus?: CodeableConcept;
    code?: CodeableConcept;
    description?: string;
    _description?: Element;
    encounter?: Reference;
    executionPeriod?: Period;
    focus?: Reference;
    for?: Reference;
    groupIdentifier?: Identifier;
    identifier?: Identifier[];
    input?: TaskInput[];
    instantiatesCanonical?: string;
    _instantiatesCanonical?: Element;
    instantiatesUri?: string;
    _instantiatesUri?: Element;
    insurance?: Reference[];
    intent?: ('unknown' | 'proposal' | 'plan' | 'order' | 'original-order' | 'reflex-order' | 'filler-order' | 'instance-order' | 'option');
    _intent?: Element;
    lastModified?: string;
    _lastModified?: Element;
    location?: Reference;
    note?: Annotation[];
    constructor(source?: Partial<Task>);
}
//# sourceMappingURL=Task.d.ts.map