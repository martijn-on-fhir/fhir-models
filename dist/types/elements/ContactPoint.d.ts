import 'reflect-metadata';
import { Element } from '../base/Element';
import { Period } from './Period';
export declare class ContactPoint extends Element {
    period?: Period;
    rank?: number;
    system?: ('phone' | 'fax' | 'email' | 'pager' | 'url' | 'sms' | 'other');
    _system?: Element;
    use?: ('home' | 'work' | 'temp' | 'old' | 'mobile');
    _use?: Element;
    value?: string;
    _value?: Element;
    constructor(source?: Partial<ContactPoint>);
}
//# sourceMappingURL=ContactPoint.d.ts.map