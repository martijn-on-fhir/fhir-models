import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
export declare class ProdCharacteristic extends BackboneElement {
    color?: string[];
    _color?: Element[];
    depth?: Quantity;
    externalDiameter?: Quantity;
    height?: Quantity;
    image?: Attachment[];
    imprint?: string[];
    _imprint?: Element[];
    nominalVolume?: Quantity;
    scoring?: CodeableConcept;
    shape?: string;
    _shape?: Element;
    weight?: Quantity;
    width?: Quantity;
    constructor(source?: Partial<ProdCharacteristic>);
}
//# sourceMappingURL=ProdCharacteristic.d.ts.map