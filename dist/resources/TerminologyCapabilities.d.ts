import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { TerminologyCapabilitiesClosure } from '../backbone/TerminologyCapabilitiesClosure';
import { TerminologyCapabilitiesCodeSystem } from '../backbone/TerminologyCapabilitiesCodeSystem';
import { TerminologyCapabilitiesExpansion } from '../backbone/TerminologyCapabilitiesExpansion';
import { TerminologyCapabilitiesImplementation } from '../backbone/TerminologyCapabilitiesImplementation';
export declare class TerminologyCapabilities extends DomainResource {
    readonly resourceType: "TerminologyCapabilities";
    closure?: TerminologyCapabilitiesClosure;
    codeSearch?: ('explicit' | 'all');
    _codeSearch?: Element;
    codeSystem?: TerminologyCapabilitiesCodeSystem[];
    contact?: ContactDetail[];
    copyright?: string;
    _copyright?: Element;
    date?: string;
    _date?: Element;
    description?: string;
    _description?: Element;
    expansion?: TerminologyCapabilitiesExpansion;
    experimental?: boolean;
    _experimental?: Element;
    implementation?: TerminologyCapabilitiesImplementation;
    jurisdiction?: CodeableConcept[];
    kind?: ('instance' | 'capability' | 'requirements');
    _kind?: Element;
    lockedDate?: boolean;
    _lockedDate?: Element;
    name?: string;
    _name?: Element;
    publisher?: string;
    _publisher?: Element;
    purpose?: string;
    constructor(source?: Partial<TerminologyCapabilities>);
}
//# sourceMappingURL=TerminologyCapabilities.d.ts.map