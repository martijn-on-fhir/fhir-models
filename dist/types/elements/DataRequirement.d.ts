import 'reflect-metadata';
import { Element } from '../base/Element';
import { CodeableConcept } from './CodeableConcept';
import { DataRequirementCodeFilter } from './DataRequirementCodeFilter';
import { DataRequirementDateFilter } from './DataRequirementDateFilter';
import { DataRequirementSort } from './DataRequirementSort';
import { Reference } from './Reference';
export declare class DataRequirement extends Element {
    codeFilter?: DataRequirementCodeFilter[];
    dateFilter?: DataRequirementDateFilter[];
    limit?: number;
    mustSupport?: string[];
    _mustSupport?: Element[];
    profile?: string[];
    _profile?: Element[];
    sort?: DataRequirementSort[];
    subjectCodeableConcept?: CodeableConcept;
    subjectReference?: Reference;
    type: string;
    _type?: Element;
    constructor(source?: Partial<DataRequirement>);
}
//# sourceMappingURL=DataRequirement.d.ts.map