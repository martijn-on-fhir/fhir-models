import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { ConsentProvisionActor } from './ConsentProvisionActor';
import { ConsentProvisionData } from './ConsentProvisionData';
import { Period } from '../elements/Period';
export declare class ConsentProvision extends BackboneElement {
    action?: CodeableConcept[];
    actor?: ConsentProvisionActor[];
    class?: Coding[];
    code?: CodeableConcept[];
    data?: ConsentProvisionData[];
    dataPeriod?: Period;
    period?: Period;
    provision?: ConsentProvision[];
    purpose?: Coding[];
    securityLabel?: Coding[];
    type?: ('deny' | 'permit');
    _type?: Element;
    constructor(source?: Partial<ConsentProvision>);
}
//# sourceMappingURL=ConsentProvision.d.ts.map