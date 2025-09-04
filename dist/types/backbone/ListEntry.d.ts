import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class ListEntry extends BackboneElement {
    date?: string;
    _date?: Element;
    deleted?: boolean;
    _deleted?: Element;
    flag?: CodeableConcept;
    item?: Reference;
    constructor(source?: Partial<ListEntry>);
}
//# sourceMappingURL=ListEntry.d.ts.map