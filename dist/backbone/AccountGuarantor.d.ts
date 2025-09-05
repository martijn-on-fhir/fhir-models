import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class AccountGuarantor extends BackboneElement {
    onHold?: boolean;
    _onHold?: Element;
    party?: Reference;
    period?: Period;
    constructor(source?: Partial<AccountGuarantor>);
}
//# sourceMappingURL=AccountGuarantor.d.ts.map