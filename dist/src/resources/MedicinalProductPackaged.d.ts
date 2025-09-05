import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { MarketingStatus } from '../backbone/MarketingStatus';
import { MedicinalProductPackagedBatchIdentifier } from '../backbone/MedicinalProductPackagedBatchIdentifier';
import { MedicinalProductPackagedPackageItem } from '../backbone/MedicinalProductPackagedPackageItem';
import { Reference } from '../elements/Reference';
export declare class MedicinalProductPackaged extends DomainResource {
    readonly resourceType: "MedicinalProductPackaged";
    batchIdentifier?: MedicinalProductPackagedBatchIdentifier[];
    description?: string;
    _description?: Element;
    identifier?: Identifier[];
    legalStatusOfSupply?: CodeableConcept;
    manufacturer?: Reference[];
    marketingAuthorization?: Reference;
    marketingStatus?: MarketingStatus[];
    packageItem?: MedicinalProductPackagedPackageItem[];
    subject?: Reference[];
    constructor(source?: Partial<MedicinalProductPackaged>);
}
//# sourceMappingURL=MedicinalProductPackaged.d.ts.map