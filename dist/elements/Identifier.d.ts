import 'reflect-metadata';
import { Element } from '../base/Element';
import { Reference } from './Reference';
import { Period } from './Period';
import { CodeableConcept } from './CodeableConcept';
export declare class Identifier extends Element {
    assigner?: Reference;
    period?: Period;
    system?: string;
    _system?: Element;
    type?: CodeableConcept;
    use?: ('usual' | 'official' | 'temp' | 'secondary' | 'old');
    _use?: Element;
    value?: string;
    _value?: Element;
    constructor(source?: Partial<Identifier>);
}
//# sourceMappingURL=Identifier.d.ts.map