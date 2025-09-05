import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { GraphDefinitionLinkTarget } from './GraphDefinitionLinkTarget';
export declare class GraphDefinitionLink extends BackboneElement {
    description?: string;
    _description?: Element;
    max?: string;
    _max?: Element;
    min?: number;
    path?: string;
    _path?: Element;
    sliceName?: string;
    _sliceName?: Element;
    target?: GraphDefinitionLinkTarget[];
    constructor(source?: Partial<GraphDefinitionLink>);
}
//# sourceMappingURL=GraphDefinitionLink.d.ts.map