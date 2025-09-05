import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Expression } from '../elements/Expression';
export declare class RequestGroupActionCondition extends BackboneElement {
    expression?: Expression;
    kind?: ('applicability' | 'start' | 'stop');
    _kind?: Element;
    constructor(source?: Partial<RequestGroupActionCondition>);
}
//# sourceMappingURL=RequestGroupActionCondition.d.ts.map