import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';
export declare class ChargeItemDefinitionPropertyGroupPriceComponent extends BackboneElement {
    amount?: Money;
    code?: CodeableConcept;
    factor?: number;
    type?: ('base' | 'surcharge' | 'deduction' | 'discount' | 'tax' | 'informational');
    _type?: Element;
    constructor(source?: Partial<ChargeItemDefinitionPropertyGroupPriceComponent>);
}
//# sourceMappingURL=ChargeItemDefinitionPropertyGroupPriceComponent.d.ts.map