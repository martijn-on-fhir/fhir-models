import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';
export declare class ImplementationGuideDefinitionPage extends BackboneElement {
    generation?: ('html' | 'markdown' | 'xml' | 'generated');
    _generation?: Element;
    nameUrl?: string;
    _nameUrl?: Element;
    nameReference?: Reference;
    page?: ImplementationGuideDefinitionPage[];
    title?: string;
    _title?: Element;
    constructor(source?: Partial<ImplementationGuideDefinitionPage>);
}
//# sourceMappingURL=ImplementationGuideDefinitionPage.d.ts.map