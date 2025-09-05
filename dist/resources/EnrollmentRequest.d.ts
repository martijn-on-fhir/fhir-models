import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class EnrollmentRequest extends DomainResource {
    readonly resourceType: "EnrollmentRequest";
    candidate?: Reference;
    coverage?: Reference;
    created?: string;
    _created?: Element;
    identifier?: Identifier[];
    insurer?: Reference;
    provider?: Reference;
    status?: ('active' | 'cancelled' | 'draft' | 'entered-in-error');
    _status?: Element;
    constructor(source?: Partial<EnrollmentRequest>);
}
//# sourceMappingURL=EnrollmentRequest.d.ts.map