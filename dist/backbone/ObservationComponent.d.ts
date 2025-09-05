import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ObservationReferenceRange } from './ObservationReferenceRange';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
import { Ratio } from '../elements/Ratio';
import { SampledData } from '../elements/SampledData';
export declare class ObservationComponent extends BackboneElement {
    code?: CodeableConcept;
    dataAbsentReason?: CodeableConcept;
    interpretation?: CodeableConcept[];
    referenceRange?: ObservationReferenceRange[];
    valueQuantity?: Quantity;
    valueCodeableConcept?: CodeableConcept;
    valueString?: string;
    _valueString?: Element;
    valueBoolean?: boolean;
    _valueBoolean?: Element;
    valueInteger?: number;
    valueRange?: Range;
    valueRatio?: Ratio;
    valueSampledData?: SampledData;
    valueTime?: string;
    _valueTime?: Element;
    valueDateTime?: string;
    _valueDateTime?: Element;
    valuePeriod?: Period;
    constructor(source?: Partial<ObservationComponent>);
}
//# sourceMappingURL=ObservationComponent.d.ts.map