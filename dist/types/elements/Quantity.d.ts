import 'reflect-metadata';
import { Element } from '../base/Element';
export declare class Quantity extends Element {
    code?: string;
    _code?: Element;
    comparator?: ('<' | '<=' | '>=' | '>');
    _comparator?: Element;
    system?: string;
    _system?: Element;
    unit?: string;
    _unit?: Element;
    value?: number;
    constructor(source?: Partial<Quantity>);
}
//# sourceMappingURL=Quantity.d.ts.map