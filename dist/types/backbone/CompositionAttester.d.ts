import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';
export declare class CompositionAttester extends BackboneElement {
    mode?: ('personal' | 'professional' | 'legal' | 'official');
    _mode?: Element;
    party?: Reference;
    time?: string;
    _time?: Element;
    constructor(source?: Partial<CompositionAttester>);
}
//# sourceMappingURL=CompositionAttester.d.ts.map