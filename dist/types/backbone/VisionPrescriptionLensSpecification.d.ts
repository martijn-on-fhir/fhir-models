import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { VisionPrescriptionLensSpecificationPrism } from './VisionPrescriptionLensSpecificationPrism';
export declare class VisionPrescriptionLensSpecification extends BackboneElement {
    add?: number;
    axis?: number;
    backCurve?: number;
    brand?: string;
    _brand?: Element;
    color?: string;
    _color?: Element;
    cylinder?: number;
    diameter?: number;
    duration?: Quantity;
    eye?: ('right' | 'left');
    _eye?: Element;
    note?: Annotation[];
    power?: number;
    prism?: VisionPrescriptionLensSpecificationPrism[];
    product?: CodeableConcept;
    sphere?: number;
    constructor(source?: Partial<VisionPrescriptionLensSpecification>);
}
//# sourceMappingURL=VisionPrescriptionLensSpecification.d.ts.map