import 'reflect-metadata';
import { Element } from '../base/Element';
export declare class ParameterDefinition extends Element {
    documentation?: string;
    _documentation?: Element;
    max?: string;
    _max?: Element;
    min?: number;
    name?: string;
    _name?: Element;
    profile?: string;
    _profile?: Element;
    type: string;
    _type?: Element;
    use: ('in' | 'out');
    _use?: Element;
    constructor(source?: Partial<ParameterDefinition>);
}
//# sourceMappingURL=ParameterDefinition.d.ts.map