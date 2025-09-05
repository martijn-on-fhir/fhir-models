import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { ExampleScenarioInstanceContainedInstance } from './ExampleScenarioInstanceContainedInstance';
export declare class ExampleScenarioProcessStepOperation extends BackboneElement {
    description?: string;
    _description?: Element;
    initiator?: string;
    _initiator?: Element;
    initiatorActive?: boolean;
    _initiatorActive?: Element;
    name?: string;
    _name?: Element;
    number?: string;
    _number?: Element;
    receiver?: string;
    _receiver?: Element;
    receiverActive?: boolean;
    _receiverActive?: Element;
    request?: ExampleScenarioInstanceContainedInstance;
    response?: ExampleScenarioInstanceContainedInstance;
    type?: string;
    _type?: Element;
    constructor(source?: Partial<ExampleScenarioProcessStepOperation>);
}
//# sourceMappingURL=ExampleScenarioProcessStepOperation.d.ts.map