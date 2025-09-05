import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class BiologicallyDerivedProductCollection extends BackboneElement {
    collectedDateTime?: string;
    _collectedDateTime?: Element;
    collectedPeriod?: Period;
    collector?: Reference;
    source?: Reference;
    constructor(source?: Partial<BiologicallyDerivedProductCollection>);
}
//# sourceMappingURL=BiologicallyDerivedProductCollection.d.ts.map