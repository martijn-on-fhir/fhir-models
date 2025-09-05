import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { DiagnosticReportMedia } from '../backbone/DiagnosticReportMedia';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class DiagnosticReport extends DomainResource {
    readonly resourceType: "DiagnosticReport";
    basedOn?: Reference[];
    category?: CodeableConcept[];
    code?: CodeableConcept;
    conclusion?: string;
    _conclusion?: Element;
    conclusionCode?: CodeableConcept[];
    effectiveDateTime?: string;
    _effectiveDateTime?: Element;
    effectivePeriod?: Period;
    encounter?: Reference;
    identifier?: Identifier[];
    imagingStudy?: Reference[];
    issued?: string;
    _issued?: Element;
    media?: DiagnosticReportMedia[];
    performer?: Reference[];
    presentedForm?: Attachment[];
    result?: Reference[];
    resultsInterpreter?: Reference[];
    specimen?: Reference[];
    status?: ('registered' | 'partial' | 'preliminary' | 'final' | 'amended' | 'corrected' | 'appended' | 'cancelled' | 'entered-in-error' | 'unknown');
    _status?: Element;
    subject?: Reference;
    constructor(source?: Partial<DiagnosticReport>);
}
//# sourceMappingURL=DiagnosticReport.d.ts.map