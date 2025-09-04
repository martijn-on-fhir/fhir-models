import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CapabilityStatementRestInteraction } from './CapabilityStatementRestInteraction';
import { CapabilityStatementRestResource } from './CapabilityStatementRestResource';
import { CapabilityStatementRestResourceOperation } from './CapabilityStatementRestResourceOperation';
import { CapabilityStatementRestResourceSearchParam } from './CapabilityStatementRestResourceSearchParam';
import { CapabilityStatementRestSecurity } from './CapabilityStatementRestSecurity';
export declare class CapabilityStatementRest extends BackboneElement {
    compartment?: string[];
    _compartment?: Element[];
    documentation?: string;
    _documentation?: Element;
    interaction?: CapabilityStatementRestInteraction[];
    mode?: ('client' | 'server');
    _mode?: Element;
    operation?: CapabilityStatementRestResourceOperation[];
    resource?: CapabilityStatementRestResource[];
    searchParam?: CapabilityStatementRestResourceSearchParam[];
    security?: CapabilityStatementRestSecurity;
    constructor(source?: Partial<CapabilityStatementRest>);
}
//# sourceMappingURL=CapabilityStatementRest.d.ts.map