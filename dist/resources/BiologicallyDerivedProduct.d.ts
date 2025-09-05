import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { BiologicallyDerivedProductCollection } from '../backbone/BiologicallyDerivedProductCollection';
import { BiologicallyDerivedProductManipulation } from '../backbone/BiologicallyDerivedProductManipulation';
import { BiologicallyDerivedProductProcessing } from '../backbone/BiologicallyDerivedProductProcessing';
import { BiologicallyDerivedProductStorage } from '../backbone/BiologicallyDerivedProductStorage';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class BiologicallyDerivedProduct extends DomainResource {
    readonly resourceType: "BiologicallyDerivedProduct";
    collection?: BiologicallyDerivedProductCollection;
    identifier?: Identifier[];
    manipulation?: BiologicallyDerivedProductManipulation;
    parent?: Reference[];
    processing?: BiologicallyDerivedProductProcessing[];
    productCategory?: ('organ' | 'tissue' | 'fluid' | 'cells' | 'biologicalAgent');
    _productCategory?: Element;
    productCode?: CodeableConcept;
    quantity?: number;
    request?: Reference[];
    status?: ('available' | 'unavailable');
    _status?: Element;
    storage?: BiologicallyDerivedProductStorage[];
    constructor(source?: Partial<BiologicallyDerivedProduct>);
}
//# sourceMappingURL=BiologicallyDerivedProduct.d.ts.map