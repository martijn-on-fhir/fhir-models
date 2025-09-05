import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
export declare class TestScriptSetupActionAssert extends BackboneElement {
    compareToSourceExpression?: string;
    _compareToSourceExpression?: Element;
    compareToSourceId?: string;
    _compareToSourceId?: Element;
    compareToSourcePath?: string;
    _compareToSourcePath?: Element;
    contentType?: string;
    _contentType?: Element;
    description?: string;
    _description?: Element;
    direction?: ('response' | 'request');
    _direction?: Element;
    expression?: string;
    _expression?: Element;
    headerField?: string;
    _headerField?: Element;
    label?: string;
    _label?: Element;
    minimumId?: string;
    _minimumId?: Element;
    navigationLinks?: boolean;
    _navigationLinks?: Element;
    operator?: ('equals' | 'notEquals' | 'in' | 'notIn' | 'greaterThan' | 'lessThan' | 'empty' | 'notEmpty' | 'contains' | 'notContains' | 'eval');
    _operator?: Element;
    path?: string;
    _path?: Element;
    requestMethod?: ('delete' | 'get' | 'options' | 'patch' | 'post' | 'put' | 'head');
    _requestMethod?: Element;
    requestURL?: string;
    _requestURL?: Element;
    constructor(source?: Partial<TestScriptSetupActionAssert>);
}
//# sourceMappingURL=TestScriptSetupActionAssert.d.ts.map