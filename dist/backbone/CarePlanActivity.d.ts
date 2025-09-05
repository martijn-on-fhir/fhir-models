import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Annotation } from '../elements/Annotation';
import { CarePlanActivityDetail } from './CarePlanActivityDetail';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class CarePlanActivity extends BackboneElement {
    detail?: CarePlanActivityDetail;
    outcomeCodeableConcept?: CodeableConcept[];
    outcomeReference?: Reference[];
    progress?: Annotation[];
    reference?: Reference;
    constructor(source?: Partial<CarePlanActivity>);
}
//# sourceMappingURL=CarePlanActivity.d.ts.map