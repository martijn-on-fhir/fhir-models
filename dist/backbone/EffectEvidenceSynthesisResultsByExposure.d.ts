import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class EffectEvidenceSynthesisResultsByExposure extends BackboneElement {
    description?: string;
    _description?: Element;
    exposureState?: ('exposure' | 'exposure-alternative');
    _exposureState?: Element;
    riskEvidenceSynthesis?: Reference;
    variantState?: CodeableConcept;
    constructor(source?: Partial<EffectEvidenceSynthesisResultsByExposure>);
}
//# sourceMappingURL=EffectEvidenceSynthesisResultsByExposure.d.ts.map