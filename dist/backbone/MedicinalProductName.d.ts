import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { MedicinalProductNameCountryLanguage } from './MedicinalProductNameCountryLanguage';
import { MedicinalProductNameNamePart } from './MedicinalProductNameNamePart';
export declare class MedicinalProductName extends BackboneElement {
    countryLanguage?: MedicinalProductNameCountryLanguage[];
    namePart?: MedicinalProductNameNamePart[];
    productName?: string;
    _productName?: Element;
    constructor(source?: Partial<MedicinalProductName>);
}
//# sourceMappingURL=MedicinalProductName.d.ts.map