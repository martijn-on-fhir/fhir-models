import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { MedicinalProductPharmaceuticalCharacteristics } from '../backbone/MedicinalProductPharmaceuticalCharacteristics';
import { MedicinalProductPharmaceuticalRouteOfAdministration } from '../backbone/MedicinalProductPharmaceuticalRouteOfAdministration';
import { Reference } from '../elements/Reference';
export declare class MedicinalProductPharmaceutical extends DomainResource {
    readonly resourceType: "MedicinalProductPharmaceutical";
    administrableDoseForm?: CodeableConcept;
    characteristics?: MedicinalProductPharmaceuticalCharacteristics[];
    device?: Reference[];
    identifier?: Identifier[];
    ingredient?: Reference[];
    routeOfAdministration?: MedicinalProductPharmaceuticalRouteOfAdministration[];
    unitOfPresentation?: CodeableConcept;
    constructor(source?: Partial<MedicinalProductPharmaceutical>);
}
//# sourceMappingURL=MedicinalProductPharmaceutical.d.ts.map