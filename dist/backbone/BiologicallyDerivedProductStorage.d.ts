import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Period } from '../elements/Period';
export declare class BiologicallyDerivedProductStorage extends BackboneElement {
    description?: string;
    _description?: Element;
    duration?: Period;
    scale?: ('farenheit' | 'celsius' | 'kelvin');
    _scale?: Element;
    temperature?: number;
    constructor(source?: Partial<BiologicallyDerivedProductStorage>);
}
//# sourceMappingURL=BiologicallyDerivedProductStorage.d.ts.map