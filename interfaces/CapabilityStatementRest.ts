import { BackboneElement } from './BackboneElement';
import { CapabilityStatementRestInteraction } from './CapabilityStatementRestInteraction';
import { CapabilityStatementRestResource } from './CapabilityStatementRestResource';
import { CapabilityStatementRestResourceOperation } from './CapabilityStatementRestResourceOperation';
import { CapabilityStatementRestResourceSearchParam } from './CapabilityStatementRestResourceSearchParam';
import { CapabilityStatementRestSecurity } from './CapabilityStatementRestSecurity';
import { Element } from './Element';

/**
 * Multiple repetitions allow definition of both client and/or server behaviors or possibly behaviors under different configuration settings (for software or requirements statements).
 */
export interface CapabilityStatementRest extends BackboneElement {

  /**
   * At present, the only defined compartments are at [CompartmentDefinition](compartmentdefinition.html).
   */
  compartment?: string[] | undefined;
  _compartment?: Element[] | undefined;
  /**
   * Information about the system's restful capabilities that apply across all applications, such as security.
   */
  documentation?: string | undefined;
  _documentation?: Element | undefined;
  /**
   * A specification of restful operations supported by the system.
   */
  interaction?: CapabilityStatementRestInteraction[] | undefined;
  /**
   * Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.
   */
  mode: ('client'|'server');
  _mode?: Element | undefined;
  /**
   * CapabilityStatement.rest.operation is for operations invoked at the system level, or for operations that are supported across multiple resource types. Operations linked from CapabilityStatement.rest.operation must have OperationDefinition.system = true, or more than one Operation.resource.
   */
  operation?: CapabilityStatementRestResourceOperation[] | undefined;
  /**
   * Max of one repetition per resource type.
   */
  resource?: CapabilityStatementRestResource[] | undefined;
  /**
   * Typically, the only search parameters supported for all searches are those that apply to all resources - tags, profiles, text search etc. These search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this resource (though many will be listed at [CapabilityStatement.rest.searchParam](capabilitystatement-definitions.html#CapabilityStatement.rest.searchParam)). The behavior of some search parameters may be further described by other code or extension elements, or narrative within the capability statement or linked [SearchParameter](searchparameter.html#) definitions.
   */
  searchParam?: CapabilityStatementRestResourceSearchParam[] | undefined;
  /**
   * Information about security implementation from an interface perspective - what a client needs to know.
   */
  security?: CapabilityStatementRestSecurity | undefined;

}