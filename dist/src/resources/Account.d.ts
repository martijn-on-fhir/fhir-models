import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { AccountCoverage } from '../backbone/AccountCoverage';
import { AccountGuarantor } from '../backbone/AccountGuarantor';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class Account extends DomainResource {
    readonly resourceType: "Account";
    coverage?: AccountCoverage[];
    description?: string;
    _description?: Element;
    guarantor?: AccountGuarantor[];
    identifier?: Identifier[];
    name?: string;
    _name?: Element;
    owner?: Reference;
    partOf?: Reference;
    servicePeriod?: Period;
    status?: ('active' | 'inactive' | 'entered-in-error' | 'on-hold' | 'unknown');
    _status?: Element;
    subject?: Reference[];
    type?: CodeableConcept;
    constructor(source?: Partial<Account>);
}
//# sourceMappingURL=Account.d.ts.map