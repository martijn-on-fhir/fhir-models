import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { GraphDefinitionLink } from './GraphDefinitionLink';
import { GraphDefinitionLinkTargetCompartment } from './GraphDefinitionLinkTargetCompartment';
export declare class GraphDefinitionLinkTarget extends BackboneElement {
    compartment?: GraphDefinitionLinkTargetCompartment[];
    link?: GraphDefinitionLink[];
    params?: string;
    _params?: Element;
    profile?: string;
    _profile?: Element;
    type?: string;
    _type?: Element;
    constructor(source?: Partial<GraphDefinitionLinkTarget>);
}
//# sourceMappingURL=GraphDefinitionLinkTarget.d.ts.map