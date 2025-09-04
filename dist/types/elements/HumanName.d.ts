import 'reflect-metadata';
import { Element } from '../base/Element';
import { Period } from './Period';
export declare class HumanName extends Element {
    family?: string;
    _family?: Element;
    given?: string[];
    _given?: Element[];
    period?: Period;
    prefix?: string[];
    _prefix?: Element[];
    suffix?: string[];
    _suffix?: Element[];
    text?: string;
    _text?: Element;
    use?: ('usual' | 'official' | 'temp' | 'nickname' | 'anonymous' | 'old' | 'maiden');
    _use?: Element;
    constructor(source?: Partial<HumanName>);
}
//# sourceMappingURL=HumanName.d.ts.map