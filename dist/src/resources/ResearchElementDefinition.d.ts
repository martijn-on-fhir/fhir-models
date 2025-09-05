import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { ResearchElementDefinitionCharacteristic } from '../backbone/ResearchElementDefinitionCharacteristic';
export declare class ResearchElementDefinition extends DomainResource {
    readonly resourceType: "ResearchElementDefinition";
    approvalDate?: string;
    _approvalDate?: Element;
    author?: ContactDetail[];
    characteristic?: ResearchElementDefinitionCharacteristic[];
    comment?: string[];
    _comment?: Element[];
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
    identifier?: Identifier[];
    jurisdiction?: CodeableConcept[];
    lastReviewDate?: string;
    _lastReviewDate?: Element;
    library?: string[];
    _library?: Element[];
    name?: string;
    constructor(source?: Partial<ResearchElementDefinition>);
}
//# sourceMappingURL=ResearchElementDefinition.d.ts.map