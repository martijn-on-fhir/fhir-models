import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { GoalTarget } from '../backbone/GoalTarget';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class Goal extends DomainResource {
    readonly resourceType: "Goal";
    achievementStatus?: CodeableConcept;
    addresses?: Reference[];
    category?: CodeableConcept[];
    description?: CodeableConcept;
    expressedBy?: Reference;
    identifier?: Identifier[];
    lifecycleStatus?: ('proposed' | 'planned' | 'accepted' | 'active' | 'on-hold' | 'completed' | 'cancelled' | 'entered-in-error' | 'rejected');
    _lifecycleStatus?: Element;
    note?: Annotation[];
    outcomeCode?: CodeableConcept[];
    outcomeReference?: Reference[];
    priority?: CodeableConcept;
    startDate?: string;
    _startDate?: Element;
    startCodeableConcept?: CodeableConcept;
    statusDate?: string;
    _statusDate?: Element;
    statusReason?: string;
    _statusReason?: Element;
    subject?: Reference;
    target?: GoalTarget[];
    constructor(source?: Partial<Goal>);
}
//# sourceMappingURL=Goal.d.ts.map