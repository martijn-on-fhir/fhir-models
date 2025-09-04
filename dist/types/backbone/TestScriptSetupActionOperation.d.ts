import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Coding } from '../elements/Coding';
import { TestScriptSetupActionOperationRequestHeader } from './TestScriptSetupActionOperationRequestHeader';
export declare class TestScriptSetupActionOperation extends BackboneElement {
    accept?: string;
    _accept?: Element;
    contentType?: string;
    _contentType?: Element;
    description?: string;
    _description?: Element;
    destination?: number;
    encodeRequestUrl?: boolean;
    _encodeRequestUrl?: Element;
    label?: string;
    _label?: Element;
    method?: ('delete' | 'get' | 'options' | 'patch' | 'post' | 'put' | 'head');
    _method?: Element;
    origin?: number;
    params?: string;
    _params?: Element;
    requestHeader?: TestScriptSetupActionOperationRequestHeader[];
    requestId?: string;
    _requestId?: Element;
    resource?: string;
    _resource?: Element;
    responseId?: string;
    _responseId?: Element;
    sourceId?: string;
    _sourceId?: Element;
    targetId?: string;
    _targetId?: Element;
    type?: Coding;
    url?: string;
    _url?: Element;
    constructor(source?: Partial<TestScriptSetupActionOperation>);
}
//# sourceMappingURL=TestScriptSetupActionOperation.d.ts.map