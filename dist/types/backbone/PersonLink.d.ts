import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';
export declare class PersonLink extends BackboneElement {
    assurance?: ('level1' | 'level2' | 'level3' | 'level4');
    _assurance?: Element;
    target?: Reference;
    constructor(source?: Partial<PersonLink>);
}
//# sourceMappingURL=PersonLink.d.ts.map