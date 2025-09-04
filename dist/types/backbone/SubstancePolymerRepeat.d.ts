import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { SubstancePolymerRepeatRepeatUnit } from './SubstancePolymerRepeatRepeatUnit';
export declare class SubstancePolymerRepeat extends BackboneElement {
    averageMolecularFormula?: string;
    _averageMolecularFormula?: Element;
    numberOfUnits?: number;
    repeatUnit?: SubstancePolymerRepeatRepeatUnit[];
    repeatUnitAmountType?: CodeableConcept;
    constructor(source?: Partial<SubstancePolymerRepeat>);
}
//# sourceMappingURL=SubstancePolymerRepeat.d.ts.map