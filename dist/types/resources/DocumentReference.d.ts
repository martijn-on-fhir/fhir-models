import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { DocumentReferenceContent } from '../backbone/DocumentReferenceContent';
import { DocumentReferenceContext } from '../backbone/DocumentReferenceContext';
import { DocumentReferenceRelatesTo } from '../backbone/DocumentReferenceRelatesTo';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class DocumentReference extends DomainResource {
    readonly resourceType: "DocumentReference";
    authenticator?: Reference;
    author?: Reference[];
    category?: CodeableConcept[];
    content?: DocumentReferenceContent[];
    context?: DocumentReferenceContext;
    custodian?: Reference;
    date?: string;
    _date?: Element;
    description?: string;
    _description?: Element;
    docStatus?: ('preliminary' | 'final' | 'amended' | 'entered-in-error');
    _docStatus?: Element;
    identifier?: Identifier[];
    masterIdentifier?: Identifier;
    relatesTo?: DocumentReferenceRelatesTo[];
    securityLabel?: CodeableConcept[];
    status?: ('current' | 'superseded' | 'entered-in-error');
    _status?: Element;
    subject?: Reference;
    type?: CodeableConcept;
    constructor(source?: Partial<DocumentReference>);
}
//# sourceMappingURL=DocumentReference.d.ts.map