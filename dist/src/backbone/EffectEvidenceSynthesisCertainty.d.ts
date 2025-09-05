import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { EffectEvidenceSynthesisCertaintyCertaintySubcomponent } from './EffectEvidenceSynthesisCertaintyCertaintySubcomponent';
export declare class EffectEvidenceSynthesisCertainty extends BackboneElement {
    certaintySubcomponent?: EffectEvidenceSynthesisCertaintyCertaintySubcomponent[];
    note?: Annotation[];
    rating?: CodeableConcept[];
    constructor(source?: Partial<EffectEvidenceSynthesisCertainty>);
}
//# sourceMappingURL=EffectEvidenceSynthesisCertainty.d.ts.map