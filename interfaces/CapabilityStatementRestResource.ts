import { Array } from './Array';
import { BackboneElement } from './BackboneElement';
import { CapabilityStatementRestResourceInteraction } from './CapabilityStatementRestResourceInteraction';
import { CapabilityStatementRestResourceOperation } from './CapabilityStatementRestResourceOperation';
import { CapabilityStatementRestResourceSearchParam } from './CapabilityStatementRestResourceSearchParam';
import { Element } from './Element';

/**
 * Max of one repetition per resource type.
 */
export interface CapabilityStatementRestResource extends BackboneElement {

  /**
   * Conditional Create is mainly appropriate for interface engine scripts converting from other formats, such as v2.
   */
  conditionalCreate?: boolean | undefined;
  _conditionalCreate?: Element | undefined;
  /**
   * Conditional Delete is mainly appropriate for interface engine scripts converting from other formats, such as v2.
   */
  conditionalDelete?: ('not-supported'|'single'|'multiple') | undefined;
  _conditionalDelete?: Element | undefined;
  /**
   * Conditional Read is mainly appropriate for interface engine scripts converting from other formats, such as v2.
   */
  conditionalRead?: ('not-supported'|'modified-since'|'not-match'|'full-support') | undefined;
  _conditionalRead?: Element | undefined;
  /**
   * Conditional Update is mainly appropriate for interface engine scripts converting from other formats, such as v2.
   */
  conditionalUpdate?: boolean | undefined;
  _conditionalUpdate?: Element | undefined;
  /**
   * Additional information about the resource type used by the system.
   */
  documentation?: string | undefined;
  _documentation?: Element | undefined;
  /**
   * In general, a Resource will only appear in a CapabilityStatement if the server actually has some capabilities - e.g. there is at least one interaction supported. However interactions can be omitted to support summarization (_summary = true).
   */
  interaction?: CapabilityStatementRestResourceInteraction[] | undefined;
  /**
   * Operations linked from CapabilityStatement.rest.resource.operation must have OperationDefinition.type = true or OperationDefinition.instance = true.
   * If an operation that is listed in multiple CapabilityStatement.rest.resource.operation (e.g. for different resource types), then clients should understand that the operation is only supported on the specified resource types, and that may be a subset of those listed in OperationDefinition.resource.
   */
  operation?: CapabilityStatementRestResourceOperation[] | undefined;
  /**
   * The profile applies to all  resources of this type - i.e. it is the superset of what is supported by the system.
   */
  profile?: string | undefined;
  _profile?: Element | undefined;
  /**
   * It is useful to support the vRead operation for current operations, even if past versions aren't available.
   */
  readHistory?: boolean | undefined;
  _readHistory?: Element | undefined;
  /**
   * A set of flags that defines how references are supported.
   */
  referencePolicy?: Array<'literal'|'logical'|'resolves'|'enforced'|'local'> | undefined;
  _referencePolicy?: Element[] | undefined;
  /**
   * If this list is empty, the server does not support includes.
   */
  searchInclude?: string[] | undefined;
  _searchInclude?: Element[] | undefined;
  /**
   * The search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this resource (though many will be listed at [CapabilityStatement.rest.searchParam](capabilitystatement-definitions.html#CapabilityStatement.rest.searchParam)). The behavior of some search parameters may be further described by other code or extension elements, or narrative within the capability statement or linked [SearchParameter](searchparameter.html#) definitions.
   */
  searchParam?: CapabilityStatementRestResourceSearchParam[] | undefined;
  /**
   * If this list is empty, the server does not support reverse includes.
   */
  searchRevInclude?: string[] | undefined;
  _searchRevInclude?: Element[] | undefined;
  /**
   * Supported profiles are different than the profile that applies to a particular resource in .rest.resource.profile. The resource profile is a general statement of what features of the resource are supported overall by the system - the sum total of the facilities it supports. A supported profile is a deeper statement about the functionality of the data and services provided by the server (or used by the client). A typical case is a laboratory system that produces a set of different reports - this is the list of types of data that it publishes. A key aspect of declaring profiles here is the question of how the client converts knowledge that the server publishes this data into working with the data; the client can inspect individual resources to determine whether they conform to a particular profile, but how does it find the ones that do? It does so by searching using the _profile parameter, so any resources listed here must be valid values for the _profile resource (using the identifier in the target profile).
   */
  supportedProfile?: string[] | undefined;
  _supportedProfile?: Element[] | undefined;
  /**
   * A type of resource exposed via the restful interface.
   */
  type: string;
  _type?: Element | undefined;
  /**
   * Allowing the clients to create new identities on the server means that the system administrator needs to have confidence that the clients do not create clashing identities between them. Obviously, if there is only one client, this won't happen. While creating identities on the client means that the clients need to be managed, it's much more convenient for many scenarios if such management can be put in place.
   */
  updateCreate?: boolean | undefined;
  _updateCreate?: Element | undefined;
  /**
   * If a server supports versionIds correctly, it SHOULD support vread too, but is not required to do so.
   */
  versioning?: ('no-version'|'versioned'|'versioned-update') | undefined;
  _versioning?: Element | undefined;

}