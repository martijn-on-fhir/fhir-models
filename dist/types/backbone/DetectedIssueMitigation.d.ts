import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class DetectedIssueMitigation extends BackboneElement {
    action?: CodeableConcept;
    author?: Reference;
    date?: string;
    _date?: Element;
    constructor(source?: Partial<DetectedIssueMitigation>);
}
//# sourceMappingURL=DetectedIssueMitigation.d.ts.map