import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class ResearchSubject extends DomainResource {
    readonly resourceType: "ResearchSubject";
    actualArm?: string;
    _actualArm?: Element;
    assignedArm?: string;
    _assignedArm?: Element;
    consent?: Reference;
    identifier?: Identifier[];
    individual?: Reference;
    period?: Period;
    status?: ('candidate' | 'eligible' | 'follow-up' | 'ineligible' | 'not-registered' | 'off-study' | 'on-study' | 'on-study-intervention' | 'on-study-observation' | 'pending-on-study' | 'potential-candidate' | 'screening' | 'withdrawn');
    _status?: Element;
    study?: Reference;
    constructor(source?: Partial<ResearchSubject>);
}
//# sourceMappingURL=ResearchSubject.d.ts.map