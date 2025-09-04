import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { DocumentManifestRelated } from '../backbone/DocumentManifestRelated';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class DocumentManifest extends DomainResource {
    readonly resourceType: "DocumentManifest";
    author?: Reference[];
    content?: Reference[];
    created?: string;
    _created?: Element;
    description?: string;
    _description?: Element;
    identifier?: Identifier[];
    masterIdentifier?: Identifier;
    recipient?: Reference[];
    related?: DocumentManifestRelated[];
    source?: string;
    _source?: Element;
    status?: ('current' | 'superseded' | 'entered-in-error');
    _status?: Element;
    subject?: Reference;
    type?: CodeableConcept;
    constructor(source?: Partial<DocumentManifest>);
}
//# sourceMappingURL=DocumentManifest.d.ts.map