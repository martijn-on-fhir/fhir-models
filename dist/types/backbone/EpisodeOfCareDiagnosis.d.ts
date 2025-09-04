import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class EpisodeOfCareDiagnosis extends BackboneElement {
    condition?: Reference;
    rank?: number;
    role?: CodeableConcept;
    constructor(source?: Partial<EpisodeOfCareDiagnosis>);
}
//# sourceMappingURL=EpisodeOfCareDiagnosis.d.ts.map