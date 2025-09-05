import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { MeasureReportGroup } from '../backbone/MeasureReportGroup';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class MeasureReport extends DomainResource {
    readonly resourceType: "MeasureReport";
    date?: string;
    _date?: Element;
    evaluatedResource?: Reference[];
    group?: MeasureReportGroup[];
    identifier?: Identifier[];
    improvementNotation?: CodeableConcept;
    measure?: string;
    _measure?: Element;
    period?: Period;
    reporter?: Reference;
    status?: ('complete' | 'pending' | 'error');
    _status?: Element;
    subject?: Reference;
    type?: ('individual' | 'subject-list' | 'summary' | 'data-collection');
    _type?: Element;
    constructor(source?: Partial<MeasureReport>);
}
//# sourceMappingURL=MeasureReport.d.ts.map