import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class ImmunizationEvaluation extends DomainResource {
    readonly resourceType: "ImmunizationEvaluation";
    authority?: Reference;
    date?: string;
    _date?: Element;
    description?: string;
    _description?: Element;
    doseNumberPositiveInt?: number;
    doseNumberString?: string;
    _doseNumberString?: Element;
    doseStatus?: CodeableConcept;
    doseStatusReason?: CodeableConcept[];
    identifier?: Identifier[];
    immunizationEvent?: Reference;
    patient?: Reference;
    series?: string;
    _series?: Element;
    seriesDosesPositiveInt?: number;
    seriesDosesString?: string;
    _seriesDosesString?: Element;
    status?: ('completed' | 'entered-in-error');
    _status?: Element;
    targetDisease?: CodeableConcept;
    constructor(source?: Partial<ImmunizationEvaluation>);
}
//# sourceMappingURL=ImmunizationEvaluation.d.ts.map