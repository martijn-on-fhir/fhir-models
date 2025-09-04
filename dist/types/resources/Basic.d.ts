import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class Basic extends DomainResource {
    readonly resourceType: "Basic";
    author?: Reference;
    code?: CodeableConcept;
    created?: string;
    _created?: Element;
    identifier?: Identifier[];
    subject?: Reference;
    constructor(source?: Partial<Basic>);
}
//# sourceMappingURL=Basic.d.ts.map