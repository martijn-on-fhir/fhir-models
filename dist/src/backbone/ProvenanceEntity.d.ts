import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { ProvenanceAgent } from './ProvenanceAgent';
import { Reference } from '../elements/Reference';
export declare class ProvenanceEntity extends BackboneElement {
    agent?: ProvenanceAgent[];
    role?: ('derivation' | 'revision' | 'quotation' | 'source' | 'removal');
    _role?: Element;
    what?: Reference;
    constructor(source?: Partial<ProvenanceEntity>);
}
//# sourceMappingURL=ProvenanceEntity.d.ts.map