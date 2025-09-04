import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { Identifier } from '../elements/Identifier';
import { MarketingStatus } from '../backbone/MarketingStatus';
import { MedicinalProductManufacturingBusinessOperation } from '../backbone/MedicinalProductManufacturingBusinessOperation';
import { MedicinalProductName } from '../backbone/MedicinalProductName';
import { MedicinalProductSpecialDesignation } from '../backbone/MedicinalProductSpecialDesignation';
import { Reference } from '../elements/Reference';
export declare class MedicinalProduct extends DomainResource {
    readonly resourceType: "MedicinalProduct";
    additionalMonitoringIndicator?: CodeableConcept;
    attachedDocument?: Reference[];
    clinicalTrial?: Reference[];
    combinedPharmaceuticalDoseForm?: CodeableConcept;
    contact?: Reference[];
    crossReference?: Identifier[];
    domain?: Coding;
    identifier?: Identifier[];
    legalStatusOfSupply?: CodeableConcept;
    manufacturingBusinessOperation?: MedicinalProductManufacturingBusinessOperation[];
    marketingStatus?: MarketingStatus[];
    masterFile?: Reference[];
    name?: MedicinalProductName[];
    packagedMedicinalProduct?: Reference[];
    paediatricUseIndicator?: CodeableConcept;
    pharmaceuticalProduct?: Reference[];
    productClassification?: CodeableConcept[];
    specialDesignation?: MedicinalProductSpecialDesignation[];
    specialMeasures?: string[];
    _specialMeasures?: Element[];
    type?: CodeableConcept;
    constructor(source?: Partial<MedicinalProduct>);
}
//# sourceMappingURL=MedicinalProduct.d.ts.map