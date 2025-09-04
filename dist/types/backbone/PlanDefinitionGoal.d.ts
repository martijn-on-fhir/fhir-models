import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { PlanDefinitionGoalTarget } from './PlanDefinitionGoalTarget';
import { RelatedArtifact } from '../elements/RelatedArtifact';
export declare class PlanDefinitionGoal extends BackboneElement {
    addresses?: CodeableConcept[];
    category?: CodeableConcept;
    description?: CodeableConcept;
    documentation?: RelatedArtifact[];
    priority?: CodeableConcept;
    start?: CodeableConcept;
    target?: PlanDefinitionGoalTarget[];
    constructor(source?: Partial<PlanDefinitionGoal>);
}
//# sourceMappingURL=PlanDefinitionGoal.d.ts.map