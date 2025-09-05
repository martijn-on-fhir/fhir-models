import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Expression } from '../elements/Expression';
export declare class PlanDefinitionActionCondition extends BackboneElement {
    expression?: Expression;
    kind?: ('applicability' | 'start' | 'stop');
    _kind?: Element;
    constructor(source?: Partial<PlanDefinitionActionCondition>);
}
//# sourceMappingURL=PlanDefinitionActionCondition.d.ts.map