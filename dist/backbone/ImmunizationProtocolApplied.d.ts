import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class ImmunizationProtocolApplied extends BackboneElement {
    authority?: Reference;
    doseNumberPositiveInt?: number;
    doseNumberString?: string;
    _doseNumberString?: Element;
    series?: string;
    _series?: Element;
    seriesDosesPositiveInt?: number;
    seriesDosesString?: string;
    _seriesDosesString?: Element;
    targetDisease?: CodeableConcept[];
    constructor(source?: Partial<ImmunizationProtocolApplied>);
}
//# sourceMappingURL=ImmunizationProtocolApplied.d.ts.map