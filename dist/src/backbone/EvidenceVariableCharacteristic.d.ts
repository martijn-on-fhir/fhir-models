import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { DataRequirement } from '../elements/DataRequirement';
import { Duration } from '../elements/Duration';
import { Expression } from '../elements/Expression';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import { Timing } from './Timing';
import { TriggerDefinition } from '../elements/TriggerDefinition';
import { UsageContext } from '../elements/UsageContext';
export declare class EvidenceVariableCharacteristic extends BackboneElement {
    definitionReference?: Reference;
    definitionCanonical?: string;
    _definitionCanonical?: Element;
    definitionCodeableConcept?: CodeableConcept;
    definitionExpression?: Expression;
    definitionDataRequirement?: DataRequirement;
    definitionTriggerDefinition?: TriggerDefinition;
    description?: string;
    _description?: Element;
    exclude?: boolean;
    _exclude?: Element;
    groupMeasure?: ('mean' | 'median' | 'mean-of-mean' | 'mean-of-median' | 'median-of-mean' | 'median-of-median');
    _groupMeasure?: Element;
    participantEffectiveDateTime?: string;
    _participantEffectiveDateTime?: Element;
    participantEffectivePeriod?: Period;
    participantEffectiveDuration?: Duration;
    participantEffectiveTiming?: Timing;
    timeFromStart?: Duration;
    usageContext?: UsageContext[];
    constructor(source?: Partial<EvidenceVariableCharacteristic>);
}
//# sourceMappingURL=EvidenceVariableCharacteristic.d.ts.map