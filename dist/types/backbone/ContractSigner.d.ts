import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Coding } from '../elements/Coding';
import { Reference } from '../elements/Reference';
import { Signature } from '../elements/Signature';
export declare class ContractSigner extends BackboneElement {
    party?: Reference;
    signature?: Signature[];
    type?: Coding;
    constructor(source?: Partial<ContractSigner>);
}
//# sourceMappingURL=ContractSigner.d.ts.map