import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { OperationDefinitionParameterBinding } from './OperationDefinitionParameterBinding';
import { OperationDefinitionParameterReferencedFrom } from './OperationDefinitionParameterReferencedFrom';
export declare class OperationDefinitionParameter extends BackboneElement {
    binding?: OperationDefinitionParameterBinding;
    documentation?: string;
    _documentation?: Element;
    max?: string;
    _max?: Element;
    min?: number;
    name?: string;
    _name?: Element;
    part?: OperationDefinitionParameter[];
    referencedFrom?: OperationDefinitionParameterReferencedFrom[];
    searchType?: ('number' | 'date' | 'string' | 'token' | 'reference' | 'composite' | 'quantity' | 'uri' | 'special');
    _searchType?: Element;
    targetProfile?: string[];
    _targetProfile?: Element[];
    type?: string;
    _type?: Element;
    use?: ('in' | 'out');
    _use?: Element;
    constructor(source?: Partial<OperationDefinitionParameter>);
}
//# sourceMappingURL=OperationDefinitionParameter.d.ts.map