import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { ExampleScenarioProcessStep } from './ExampleScenarioProcessStep';
export declare class ExampleScenarioProcess extends BackboneElement {
    description?: string;
    _description?: Element;
    postConditions?: string;
    _postConditions?: Element;
    preConditions?: string;
    _preConditions?: Element;
    step?: ExampleScenarioProcessStep[];
    title?: string;
    _title?: Element;
    constructor(source?: Partial<ExampleScenarioProcess>);
}
//# sourceMappingURL=ExampleScenarioProcess.d.ts.map