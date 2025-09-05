import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Attachment } from '../elements/Attachment';
import { Identifier } from '../elements/Identifier';
export declare class SubstanceProteinSubunit extends BackboneElement {
    cTerminalModification?: string;
    _cTerminalModification?: Element;
    cTerminalModificationId?: Identifier;
    length?: number;
    nTerminalModification?: string;
    _nTerminalModification?: Element;
    nTerminalModificationId?: Identifier;
    sequence?: string;
    _sequence?: Element;
    sequenceAttachment?: Attachment;
    subunit?: number;
    constructor(source?: Partial<SubstanceProteinSubunit>);
}
//# sourceMappingURL=SubstanceProteinSubunit.d.ts.map