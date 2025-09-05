import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Reference } from '../elements/Reference';
export declare class ConsentProvisionData extends BackboneElement {
    meaning?: ('instance' | 'related' | 'dependents' | 'authoredby');
    _meaning?: Element;
    reference?: Reference;
    constructor(source?: Partial<ConsentProvisionData>);
}
//# sourceMappingURL=ConsentProvisionData.d.ts.map