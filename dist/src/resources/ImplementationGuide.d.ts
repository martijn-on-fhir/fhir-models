import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { ImplementationGuideDefinition } from '../backbone/ImplementationGuideDefinition';
import { ImplementationGuideDependsOn } from '../backbone/ImplementationGuideDependsOn';
import { ImplementationGuideGlobal } from '../backbone/ImplementationGuideGlobal';
import { ImplementationGuideManifest } from '../backbone/ImplementationGuideManifest';
export declare class ImplementationGuide extends DomainResource {
    readonly resourceType: "ImplementationGuide";
    contact?: ContactDetail[];
    copyright?: string;
    _copyright?: Element;
    date?: string;
    _date?: Element;
    definition?: ImplementationGuideDefinition;
    dependsOn?: ImplementationGuideDependsOn[];
    description?: string;
    _description?: Element;
    experimental?: boolean;
    _experimental?: Element;
    fhirVersion?: string[];
    _fhirVersion?: Element[];
    global?: ImplementationGuideGlobal[];
    jurisdiction?: CodeableConcept[];
    license?: string;
    _license?: Element;
    manifest?: ImplementationGuideManifest;
    name?: string;
    _name?: Element;
    packageId?: string;
    _packageId?: Element;
    publisher?: string;
    _publisher?: Element;
    status?: ('draft' | 'active' | 'retired' | 'unknown');
    constructor(source?: Partial<ImplementationGuide>);
}
//# sourceMappingURL=ImplementationGuide.d.ts.map