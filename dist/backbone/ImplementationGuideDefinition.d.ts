import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { ImplementationGuideDefinitionGrouping } from './ImplementationGuideDefinitionGrouping';
import { ImplementationGuideDefinitionPage } from './ImplementationGuideDefinitionPage';
import { ImplementationGuideDefinitionParameter } from './ImplementationGuideDefinitionParameter';
import { ImplementationGuideDefinitionResource } from './ImplementationGuideDefinitionResource';
import { ImplementationGuideDefinitionTemplate } from './ImplementationGuideDefinitionTemplate';
export declare class ImplementationGuideDefinition extends BackboneElement {
    grouping?: ImplementationGuideDefinitionGrouping[];
    page?: ImplementationGuideDefinitionPage;
    parameter?: ImplementationGuideDefinitionParameter[];
    resource?: ImplementationGuideDefinitionResource[];
    template?: ImplementationGuideDefinitionTemplate[];
    constructor(source?: Partial<ImplementationGuideDefinition>);
}
//# sourceMappingURL=ImplementationGuideDefinition.d.ts.map