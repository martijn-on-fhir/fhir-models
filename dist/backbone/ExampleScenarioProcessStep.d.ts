import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { ExampleScenarioProcess } from './ExampleScenarioProcess';
import { ExampleScenarioProcessStepAlternative } from './ExampleScenarioProcessStepAlternative';
import { ExampleScenarioProcessStepOperation } from './ExampleScenarioProcessStepOperation';
export declare class ExampleScenarioProcessStep extends BackboneElement {
    alternative?: ExampleScenarioProcessStepAlternative[];
    operation?: ExampleScenarioProcessStepOperation;
    pause?: boolean;
    _pause?: Element;
    process?: ExampleScenarioProcess[];
    constructor(source?: Partial<ExampleScenarioProcessStep>);
}
//# sourceMappingURL=ExampleScenarioProcessStep.d.ts.map