import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { Identifier } from '../elements/Identifier';
import { ImagingStudySeries } from '../backbone/ImagingStudySeries';
import { Reference } from '../elements/Reference';
export declare class ImagingStudy extends DomainResource {
    readonly resourceType: "ImagingStudy";
    basedOn?: Reference[];
    description?: string;
    _description?: Element;
    encounter?: Reference;
    endpoint?: Reference[];
    identifier?: Identifier[];
    interpreter?: Reference[];
    location?: Reference;
    modality?: Coding[];
    note?: Annotation[];
    numberOfInstances?: number;
    numberOfSeries?: number;
    procedureCode?: CodeableConcept[];
    procedureReference?: Reference;
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[];
    referrer?: Reference;
    series?: ImagingStudySeries[];
    started?: string;
    _started?: Element;
    status?: ('registered' | 'available' | 'cancelled' | 'entered-in-error' | 'unknown');
    _status?: Element;
    subject?: Reference;
    constructor(source?: Partial<ImagingStudy>);
}
//# sourceMappingURL=ImagingStudy.d.ts.map