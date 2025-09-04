import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { SubstanceAmount } from './SubstanceAmount';
import { SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation } from './SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation';
import { SubstancePolymerRepeatRepeatUnitStructuralRepresentation } from './SubstancePolymerRepeatRepeatUnitStructuralRepresentation';
export declare class SubstancePolymerRepeatRepeatUnit extends BackboneElement {
    amount?: SubstanceAmount;
    degreeOfPolymerisation?: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[];
    orientationOfPolymerisation?: CodeableConcept;
    repeatUnit?: string;
    _repeatUnit?: Element;
    structuralRepresentation?: SubstancePolymerRepeatRepeatUnitStructuralRepresentation[];
    constructor(source?: Partial<SubstancePolymerRepeatRepeatUnit>);
}
//# sourceMappingURL=SubstancePolymerRepeatRepeatUnit.d.ts.map