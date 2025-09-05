import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import { RiskAssessmentPrediction } from '../backbone/RiskAssessmentPrediction';
export declare class RiskAssessment extends DomainResource {
    readonly resourceType: "RiskAssessment";
    basedOn?: Reference;
    basis?: Reference[];
    code?: CodeableConcept;
    condition?: Reference;
    encounter?: Reference;
    identifier?: Identifier[];
    method?: CodeableConcept;
    mitigation?: string;
    _mitigation?: Element;
    note?: Annotation[];
    occurrenceDateTime?: string;
    _occurrenceDateTime?: Element;
    occurrencePeriod?: Period;
    parent?: Reference;
    performer?: Reference;
    prediction?: RiskAssessmentPrediction[];
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[];
    status?: ('registered' | 'preliminary' | 'final' | 'amended' | 'corrected' | 'cancelled' | 'entered-in-error' | 'unknown');
    _status?: Element;
    subject?: Reference;
    constructor(source?: Partial<RiskAssessment>);
}
//# sourceMappingURL=RiskAssessment.d.ts.map