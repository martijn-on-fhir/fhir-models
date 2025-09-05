import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CatalogEntryRelatedEntry } from '../backbone/CatalogEntryRelatedEntry';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class CatalogEntry extends DomainResource {
    readonly resourceType: "CatalogEntry";
    additionalCharacteristic?: CodeableConcept[];
    additionalClassification?: CodeableConcept[];
    additionalIdentifier?: Identifier[];
    classification?: CodeableConcept[];
    identifier?: Identifier[];
    lastUpdated?: string;
    _lastUpdated?: Element;
    orderable?: boolean;
    _orderable?: Element;
    referencedItem?: Reference;
    relatedEntry?: CatalogEntryRelatedEntry[];
    status?: ('draft' | 'active' | 'retired' | 'unknown');
    _status?: Element;
    type?: CodeableConcept;
    validityPeriod?: Period;
    validTo?: string;
    _validTo?: Element;
    constructor(source?: Partial<CatalogEntry>);
}
//# sourceMappingURL=CatalogEntry.d.ts.map