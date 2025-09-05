import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class ContractContentDefinition extends BackboneElement {
    copyright?: string;
    _copyright?: Element;
    publicationDate?: string;
    _publicationDate?: Element;
    publicationStatus?: ('amended' | 'appended' | 'cancelled' | 'disputed' | 'entered-in-error' | 'executable' | 'executed' | 'negotiable' | 'offered' | 'policy' | 'rejected' | 'renewed' | 'revoked' | 'resolved' | 'terminated');
    _publicationStatus?: Element;
    publisher?: Reference;
    subType?: CodeableConcept;
    type?: CodeableConcept;
    constructor(source?: Partial<ContractContentDefinition>);
}
//# sourceMappingURL=ContractContentDefinition.d.ts.map