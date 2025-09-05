import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { EffectEvidenceSynthesisEffectEstimatePrecisionEstimate } from './EffectEvidenceSynthesisEffectEstimatePrecisionEstimate';
export declare class EffectEvidenceSynthesisEffectEstimate extends BackboneElement {
    description?: string;
    _description?: Element;
    precisionEstimate?: EffectEvidenceSynthesisEffectEstimatePrecisionEstimate[];
    type?: CodeableConcept;
    unitOfMeasure?: CodeableConcept;
    value?: number;
    variantState?: CodeableConcept;
    constructor(source?: Partial<EffectEvidenceSynthesisEffectEstimate>);
}
//# sourceMappingURL=EffectEvidenceSynthesisEffectEstimate.d.ts.map