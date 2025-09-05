import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Range } from '../elements/Range';
export declare class Population extends BackboneElement {
    ageRange?: Range;
    ageCodeableConcept?: CodeableConcept;
    gender?: CodeableConcept;
    physiologicalCondition?: CodeableConcept;
    race?: CodeableConcept;
    constructor(source?: Partial<Population>);
}
//# sourceMappingURL=Population.d.ts.map