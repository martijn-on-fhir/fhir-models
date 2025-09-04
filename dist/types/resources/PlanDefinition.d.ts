import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { PlanDefinitionAction } from '../backbone/PlanDefinitionAction';
import { PlanDefinitionGoal } from '../backbone/PlanDefinitionGoal';
export declare class PlanDefinition extends DomainResource {
    readonly resourceType: "PlanDefinition";
    action?: PlanDefinitionAction[];
    approvalDate?: string;
    _approvalDate?: Element;
    author?: ContactDetail[];
    contact?: ContactDetail[];
    copyright?: string;
    _copyright?: Element;
    date?: string;
    _date?: Element;
    description?: string;
    _description?: Element;
    editor?: ContactDetail[];
    effectivePeriod?: Period;
    endorser?: ContactDetail[];
    experimental?: boolean;
    _experimental?: Element;
    goal?: PlanDefinitionGoal[];
    identifier?: Identifier[];
    jurisdiction?: CodeableConcept[];
    lastReviewDate?: string;
    _lastReviewDate?: Element;
    library?: string[];
    _library?: Element[];
    name?: string;
    _name?: Element;
    constructor(source?: Partial<PlanDefinition>);
}
//# sourceMappingURL=PlanDefinition.d.ts.map