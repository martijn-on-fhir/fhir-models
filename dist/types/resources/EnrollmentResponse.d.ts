import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class EnrollmentResponse extends DomainResource {
    readonly resourceType: "EnrollmentResponse";
    created?: string;
    _created?: Element;
    disposition?: string;
    _disposition?: Element;
    identifier?: Identifier[];
    organization?: Reference;
    outcome?: ('queued' | 'complete' | 'error' | 'partial');
    _outcome?: Element;
    request?: Reference;
    requestProvider?: Reference;
    status?: ('active' | 'cancelled' | 'draft' | 'entered-in-error');
    _status?: Element;
    constructor(source?: Partial<EnrollmentResponse>);
}
//# sourceMappingURL=EnrollmentResponse.d.ts.map