import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class Media extends DomainResource {
    readonly resourceType: "Media";
    basedOn?: Reference[];
    bodySite?: CodeableConcept;
    content?: Attachment;
    createdDateTime?: string;
    _createdDateTime?: Element;
    createdPeriod?: Period;
    device?: Reference;
    deviceName?: string;
    _deviceName?: Element;
    duration?: number;
    encounter?: Reference;
    frames?: number;
    height?: number;
    identifier?: Identifier[];
    issued?: string;
    _issued?: Element;
    modality?: CodeableConcept;
    note?: Annotation[];
    operator?: Reference;
    partOf?: Reference[];
    reasonCode?: CodeableConcept[];
    status?: ('preparation' | 'in-progress' | 'not-done' | 'on-hold' | 'stopped' | 'completed' | 'entered-in-error' | 'unknown');
    _status?: Element;
    subject?: Reference;
    type?: CodeableConcept;
    constructor(source?: Partial<Media>);
}
//# sourceMappingURL=Media.d.ts.map