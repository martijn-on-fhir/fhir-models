import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
export declare class GraphDefinitionLinkTargetCompartment extends BackboneElement {
    code?: ('Patient' | 'Encounter' | 'RelatedPerson' | 'Practitioner' | 'Device');
    _code?: Element;
    description?: string;
    _description?: Element;
    expression?: string;
    _expression?: Element;
    rule?: ('identical' | 'matching' | 'different' | 'custom');
    _rule?: Element;
    use?: ('condition' | 'requirement');
    _use?: Element;
    constructor(source?: Partial<GraphDefinitionLinkTargetCompartment>);
}
//# sourceMappingURL=GraphDefinitionLinkTargetCompartment.d.ts.map