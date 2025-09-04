import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CapabilityStatementDocument } from '../backbone/CapabilityStatementDocument';
import { CapabilityStatementImplementation } from '../backbone/CapabilityStatementImplementation';
import { CapabilityStatementMessaging } from '../backbone/CapabilityStatementMessaging';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
export declare class CapabilityStatement extends DomainResource {
    readonly resourceType: "CapabilityStatement";
    contact?: ContactDetail[];
    copyright?: string;
    _copyright?: Element;
    date?: string;
    _date?: Element;
    description?: string;
    _description?: Element;
    document?: CapabilityStatementDocument[];
    experimental?: boolean;
    _experimental?: Element;
    fhirVersion?: string;
    _fhirVersion?: Element;
    format?: string[];
    _format?: Element[];
    implementation?: CapabilityStatementImplementation;
    implementationGuide?: string[];
    _implementationGuide?: Element[];
    imports?: string[];
    _imports?: Element[];
    instantiates?: string[];
    _instantiates?: Element[];
    jurisdiction?: CodeableConcept[];
    kind?: ('instance' | 'capability' | 'requirements');
    _kind?: Element;
    messaging?: CapabilityStatementMessaging[];
    constructor(source?: Partial<CapabilityStatement>);
}
//# sourceMappingURL=CapabilityStatement.d.ts.map