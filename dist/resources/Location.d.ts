import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Address } from '../elements/Address';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { ContactPoint } from '../elements/ContactPoint';
import { Identifier } from '../elements/Identifier';
import { LocationHoursOfOperation } from '../backbone/LocationHoursOfOperation';
import { LocationPosition } from '../backbone/LocationPosition';
import { Reference } from '../elements/Reference';
export declare class Location extends DomainResource {
    readonly resourceType: "Location";
    address?: Address;
    alias?: string[];
    _alias?: Element[];
    availabilityExceptions?: string;
    _availabilityExceptions?: Element;
    description?: string;
    _description?: Element;
    endpoint?: Reference[];
    hoursOfOperation?: LocationHoursOfOperation[];
    identifier?: Identifier[];
    managingOrganization?: Reference;
    mode?: ('instance' | 'kind');
    _mode?: Element;
    name?: string;
    _name?: Element;
    operationalStatus?: Coding;
    partOf?: Reference;
    physicalType?: CodeableConcept;
    position?: LocationPosition;
    status?: ('active' | 'suspended' | 'inactive');
    _status?: Element;
    telecom?: ContactPoint[];
    type?: CodeableConcept[];
    constructor(source?: Partial<Location>);
}
//# sourceMappingURL=Location.d.ts.map