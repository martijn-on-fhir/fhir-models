import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Identifier } from '../elements/Identifier';
import { Quantity } from '../elements/Quantity';
export declare class SubstanceInstance extends BackboneElement {
    expiry?: string;
    _expiry?: Element;
    identifier?: Identifier;
    quantity?: Quantity;
    constructor(source?: Partial<SubstanceInstance>);
}
//# sourceMappingURL=SubstanceInstance.d.ts.map