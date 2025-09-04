import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';
export declare class ImplementationGuideDefinitionResource extends BackboneElement {
    description?: string;
    _description?: Element;
    exampleBoolean?: boolean;
    _exampleBoolean?: Element;
    exampleCanonical?: string;
    _exampleCanonical?: Element;
    fhirVersion?: string[];
    _fhirVersion?: Element[];
    groupingId?: string;
    _groupingId?: Element;
    name?: string;
    _name?: Element;
    reference?: Reference;
    constructor(source?: Partial<ImplementationGuideDefinitionResource>);
}
//# sourceMappingURL=ImplementationGuideDefinitionResource.d.ts.map