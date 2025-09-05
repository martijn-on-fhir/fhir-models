import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { AuditEventEntityDetail } from './AuditEventEntityDetail';
import { Coding } from '../elements/Coding';
import { Reference } from '../elements/Reference';
export declare class AuditEventEntity extends BackboneElement {
    description?: string;
    _description?: Element;
    detail?: AuditEventEntityDetail[];
    lifecycle?: Coding;
    name?: string;
    _name?: Element;
    query?: string;
    _query?: Element;
    role?: Coding;
    securityLabel?: Coding[];
    type?: Coding;
    what?: Reference;
    constructor(source?: Partial<AuditEventEntity>);
}
//# sourceMappingURL=AuditEventEntity.d.ts.map