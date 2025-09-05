import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Duration } from '../elements/Duration';
import { SpecimenDefinitionTypeTestedContainer } from './SpecimenDefinitionTypeTestedContainer';
import { SpecimenDefinitionTypeTestedHandling } from './SpecimenDefinitionTypeTestedHandling';
export declare class SpecimenDefinitionTypeTested extends BackboneElement {
    container?: SpecimenDefinitionTypeTestedContainer;
    handling?: SpecimenDefinitionTypeTestedHandling[];
    isDerived?: boolean;
    _isDerived?: Element;
    preference?: ('preferred' | 'alternate');
    _preference?: Element;
    rejectionCriterion?: CodeableConcept[];
    requirement?: string;
    _requirement?: Element;
    retentionTime?: Duration;
    type?: CodeableConcept;
    constructor(source?: Partial<SpecimenDefinitionTypeTested>);
}
//# sourceMappingURL=SpecimenDefinitionTypeTested.d.ts.map