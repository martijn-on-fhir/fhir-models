import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { RiskEvidenceSynthesisRiskEstimatePrecisionEstimate } from './RiskEvidenceSynthesisRiskEstimatePrecisionEstimate';
export declare class RiskEvidenceSynthesisRiskEstimate extends BackboneElement {
    denominatorCount?: number;
    description?: string;
    _description?: Element;
    numeratorCount?: number;
    precisionEstimate?: RiskEvidenceSynthesisRiskEstimatePrecisionEstimate[];
    type?: CodeableConcept;
    unitOfMeasure?: CodeableConcept;
    value?: number;
    constructor(source?: Partial<RiskEvidenceSynthesisRiskEstimate>);
}
//# sourceMappingURL=RiskEvidenceSynthesisRiskEstimate.d.ts.map