import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { ActivityDefinitionDynamicValue } from '../backbone/ActivityDefinitionDynamicValue';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { Dosage } from '../backbone/Dosage';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
export declare class ActivityDefinition extends DomainResource {
    readonly resourceType: "ActivityDefinition";
    approvalDate?: string;
    _approvalDate?: Element;
    author?: ContactDetail[];
    bodySite?: CodeableConcept[];
    code?: CodeableConcept;
    contact?: ContactDetail[];
    copyright?: string;
    _copyright?: Element;
    date?: string;
    _date?: Element;
    description?: string;
    _description?: Element;
    doNotPerform?: boolean;
    _doNotPerform?: Element;
    dosage?: Dosage[];
    dynamicValue?: ActivityDefinitionDynamicValue[];
    editor?: ContactDetail[];
    effectivePeriod?: Period;
    endorser?: ContactDetail[];
    experimental?: boolean;
    _experimental?: Element;
    identifier?: Identifier[];
    intent?: ('proposal' | 'plan' | 'directive' | 'order' | 'original-order' | 'reflex-order' | 'filler-order' | 'instance-order' | 'option');
    _intent?: Element;
    jurisdiction?: CodeableConcept[];
    constructor(source?: Partial<ActivityDefinition>);
}
//# sourceMappingURL=ActivityDefinition.d.ts.map