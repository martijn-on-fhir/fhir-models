import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class InvoiceParticipant extends BackboneElement {
    actor?: Reference;
    role?: CodeableConcept;
    constructor(source?: Partial<InvoiceParticipant>);
}
//# sourceMappingURL=InvoiceParticipant.d.ts.map