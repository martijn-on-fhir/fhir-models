import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ConsentPolicy } from '../backbone/ConsentPolicy';
import { ConsentProvision } from '../backbone/ConsentProvision';
import { ConsentVerification } from '../backbone/ConsentVerification';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class Consent extends DomainResource {
    readonly resourceType: "Consent";
    category?: CodeableConcept[];
    dateTime?: string;
    _dateTime?: Element;
    identifier?: Identifier[];
    organization?: Reference[];
    patient?: Reference;
    performer?: Reference[];
    policy?: ConsentPolicy[];
    policyRule?: CodeableConcept;
    provision?: ConsentProvision;
    scope?: CodeableConcept;
    sourceAttachment?: Attachment;
    sourceReference?: Reference;
    status?: ('draft' | 'proposed' | 'active' | 'rejected' | 'inactive' | 'entered-in-error');
    _status?: Element;
    verification?: ConsentVerification[];
    constructor(source?: Partial<Consent>);
}
//# sourceMappingURL=Consent.d.ts.map