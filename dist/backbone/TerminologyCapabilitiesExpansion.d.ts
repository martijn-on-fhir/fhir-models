import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { TerminologyCapabilitiesExpansionParameter } from './TerminologyCapabilitiesExpansionParameter';
export declare class TerminologyCapabilitiesExpansion extends BackboneElement {
    hierarchical?: boolean;
    _hierarchical?: Element;
    incomplete?: boolean;
    _incomplete?: Element;
    paging?: boolean;
    _paging?: Element;
    parameter?: TerminologyCapabilitiesExpansionParameter[];
    textFilter?: string;
    _textFilter?: Element;
    constructor(source?: Partial<TerminologyCapabilitiesExpansion>);
}
//# sourceMappingURL=TerminologyCapabilitiesExpansion.d.ts.map