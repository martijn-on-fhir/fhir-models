import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Range } from '../elements/Range';
export declare class RiskAssessmentPrediction extends BackboneElement {
    outcome?: CodeableConcept;
    probabilityDecimal?: number;
    probabilityRange?: Range;
    qualitativeRisk?: CodeableConcept;
    rationale?: string;
    _rationale?: Element;
    relativeRisk?: number;
    whenPeriod?: Period;
    whenRange?: Range;
    constructor(source?: Partial<RiskAssessmentPrediction>);
}
//# sourceMappingURL=RiskAssessmentPrediction.d.ts.map