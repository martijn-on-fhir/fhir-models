import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
export declare class ClaimResponseProcessNote extends BackboneElement {
    language?: CodeableConcept;
    number?: number;
    text?: string;
    _text?: Element;
    type?: ('display' | 'print' | 'printoper');
    _type?: Element;
    constructor(source?: Partial<ClaimResponseProcessNote>);
}
//# sourceMappingURL=ClaimResponseProcessNote.d.ts.map