import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Coding } from '../elements/Coding';
import { Reference } from '../elements/Reference';
export declare class AuditEventSource extends BackboneElement {
    observer?: Reference;
    site?: string;
    _site?: Element;
    type?: Coding[];
    constructor(source?: Partial<AuditEventSource>);
}
//# sourceMappingURL=AuditEventSource.d.ts.map