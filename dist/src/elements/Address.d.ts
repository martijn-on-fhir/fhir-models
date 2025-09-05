import 'reflect-metadata';
import { Element } from '../base/Element';
import { Period } from './Period';
export declare class Address extends Element {
    city?: string;
    _city?: Element;
    country?: string;
    _country?: Element;
    district?: string;
    _district?: Element;
    line?: string[];
    _line?: Element[];
    period?: Period;
    postalCode?: string;
    _postalCode?: Element;
    state?: string;
    _state?: Element;
    text?: string;
    _text?: Element;
    type?: ('postal' | 'physical' | 'both');
    _type?: Element;
    use?: ('home' | 'work' | 'temp' | 'old' | 'billing');
    _use?: Element;
    constructor(source?: Partial<Address>);
}
//# sourceMappingURL=Address.d.ts.map