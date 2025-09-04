import 'reflect-metadata';
import { Element } from '../base/Element';
import { Coding } from './Coding';
import { Reference } from './Reference';
export declare class Signature extends Element {
    data?: string;
    _data?: Element;
    onBehalfOf?: Reference;
    sigFormat?: string;
    _sigFormat?: Element;
    targetFormat?: string;
    _targetFormat?: Element;
    type: Coding[];
    when: string;
    _when?: Element;
    who: Reference;
    constructor(source?: Partial<Signature>);
}
//# sourceMappingURL=Signature.d.ts.map