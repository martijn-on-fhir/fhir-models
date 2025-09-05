import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
export declare class MolecularSequenceRepository extends BackboneElement {
    datasetId?: string;
    _datasetId?: Element;
    name?: string;
    _name?: Element;
    readsetId?: string;
    _readsetId?: Element;
    type?: ('directlink' | 'openapi' | 'login' | 'oauth' | 'other');
    _type?: Element;
    url?: string;
    _url?: Element;
    variantsetId?: string;
    _variantsetId?: Element;
    constructor(source?: Partial<MolecularSequenceRepository>);
}
//# sourceMappingURL=MolecularSequenceRepository.d.ts.map