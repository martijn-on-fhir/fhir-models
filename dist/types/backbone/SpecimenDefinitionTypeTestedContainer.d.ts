import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { SpecimenDefinitionTypeTestedContainerAdditive } from './SpecimenDefinitionTypeTestedContainerAdditive';
export declare class SpecimenDefinitionTypeTestedContainer extends BackboneElement {
    additive?: SpecimenDefinitionTypeTestedContainerAdditive[];
    cap?: CodeableConcept;
    capacity?: Quantity;
    description?: string;
    _description?: Element;
    material?: CodeableConcept;
    minimumVolumeQuantity?: Quantity;
    minimumVolumeString?: string;
    _minimumVolumeString?: Element;
    preparation?: string;
    _preparation?: Element;
    type?: CodeableConcept;
    constructor(source?: Partial<SpecimenDefinitionTypeTestedContainer>);
}
//# sourceMappingURL=SpecimenDefinitionTypeTestedContainer.d.ts.map