import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
export declare class ActivityDefinitionParticipant extends BackboneElement {
    role?: CodeableConcept;
    type?: ('patient' | 'practitioner' | 'related-person' | 'device');
    _type?: Element;
    constructor(source?: Partial<ActivityDefinitionParticipant>);
}
//# sourceMappingURL=ActivityDefinitionParticipant.d.ts.map