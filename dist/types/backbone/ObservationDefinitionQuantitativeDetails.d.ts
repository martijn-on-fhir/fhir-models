import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
export declare class ObservationDefinitionQuantitativeDetails extends BackboneElement {
    conversionFactor?: number;
    customaryUnit?: CodeableConcept;
    decimalPrecision?: number;
    unit?: CodeableConcept;
    constructor(source?: Partial<ObservationDefinitionQuantitativeDetails>);
}
//# sourceMappingURL=ObservationDefinitionQuantitativeDetails.d.ts.map