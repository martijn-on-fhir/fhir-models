import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Duration } from '../elements/Duration';
import { Range } from '../elements/Range';
export declare class SpecimenDefinitionTypeTestedHandling extends BackboneElement {
    instruction?: string;
    _instruction?: Element;
    maxDuration?: Duration;
    temperatureQualifier?: CodeableConcept;
    temperatureRange?: Range;
    constructor(source?: Partial<SpecimenDefinitionTypeTestedHandling>);
}
//# sourceMappingURL=SpecimenDefinitionTypeTestedHandling.d.ts.map