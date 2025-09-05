import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { AdverseEventSuspectEntity } from '../backbone/AdverseEventSuspectEntity';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class AdverseEvent extends DomainResource {
    readonly resourceType: "AdverseEvent";
    actuality?: ('actual' | 'potential');
    _actuality?: Element;
    category?: CodeableConcept[];
    contributor?: Reference[];
    date?: string;
    _date?: Element;
    detected?: string;
    _detected?: Element;
    encounter?: Reference;
    event?: CodeableConcept;
    identifier?: Identifier;
    location?: Reference;
    outcome?: CodeableConcept;
    recordedDate?: string;
    _recordedDate?: Element;
    recorder?: Reference;
    referenceDocument?: Reference[];
    resultingCondition?: Reference[];
    seriousness?: CodeableConcept;
    severity?: CodeableConcept;
    study?: Reference[];
    subject?: Reference;
    subjectMedicalHistory?: Reference[];
    suspectEntity?: AdverseEventSuspectEntity[];
    constructor(source?: Partial<AdverseEvent>);
}
//# sourceMappingURL=AdverseEvent.d.ts.map