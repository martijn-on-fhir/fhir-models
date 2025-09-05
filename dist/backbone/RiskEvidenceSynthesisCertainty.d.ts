import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { RiskEvidenceSynthesisCertaintyCertaintySubcomponent } from './RiskEvidenceSynthesisCertaintyCertaintySubcomponent';
export declare class RiskEvidenceSynthesisCertainty extends BackboneElement {
    certaintySubcomponent?: RiskEvidenceSynthesisCertaintyCertaintySubcomponent[];
    note?: Annotation[];
    rating?: CodeableConcept[];
    constructor(source?: Partial<RiskEvidenceSynthesisCertainty>);
}
//# sourceMappingURL=RiskEvidenceSynthesisCertainty.d.ts.map