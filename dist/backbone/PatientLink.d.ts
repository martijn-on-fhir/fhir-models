import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';
export declare class PatientLink extends BackboneElement {
    other?: Reference;
    type?: ('replaced-by' | 'replaces' | 'refer' | 'seealso');
    _type?: Element;
    constructor(source?: Partial<PatientLink>);
}
//# sourceMappingURL=PatientLink.d.ts.map