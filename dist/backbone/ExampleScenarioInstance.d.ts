import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { ExampleScenarioInstanceContainedInstance } from './ExampleScenarioInstanceContainedInstance';
import { ExampleScenarioInstanceVersion } from './ExampleScenarioInstanceVersion';
export declare class ExampleScenarioInstance extends BackboneElement {
    containedInstance?: ExampleScenarioInstanceContainedInstance[];
    description?: string;
    _description?: Element;
    name?: string;
    _name?: Element;
    resourceId?: string;
    _resourceId?: Element;
    resourceType?: string;
    _resourceType?: Element;
    version?: ExampleScenarioInstanceVersion[];
    constructor(source?: Partial<ExampleScenarioInstance>);
}
//# sourceMappingURL=ExampleScenarioInstance.d.ts.map