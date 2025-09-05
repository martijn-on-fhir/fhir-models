import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { ImplementationGuideManifestPage } from './ImplementationGuideManifestPage';
import { ImplementationGuideManifestResource } from './ImplementationGuideManifestResource';
export declare class ImplementationGuideManifest extends BackboneElement {
    image?: string[];
    _image?: Element[];
    other?: string[];
    _other?: Element[];
    page?: ImplementationGuideManifestPage[];
    rendering?: string;
    _rendering?: Element;
    resource?: ImplementationGuideManifestResource[];
    constructor(source?: Partial<ImplementationGuideManifest>);
}
//# sourceMappingURL=ImplementationGuideManifest.d.ts.map