import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * In general, a Resource will only appear in a CapabilityStatement if the server actually has some capabilities - e.g. there is at least one interaction supported. However interactions can be omitted to support summarization (_summary = true).
 */
export interface CapabilityStatementRestResourceInteraction extends BackboneElement {

  /**
   * Coded identifier of the operation, supported by the system resource.
   */
  code: ('read'|'vread'|'update'|'patch'|'delete'|'history-instance'|'history-type'|'create'|'search-type');
  _code?: Element | undefined;
  /**
   * Guidance specific to the implementation of this operation, such as 'delete is a logical delete' or 'updates are only allowed with version id' or 'creates permitted from pre-authorized certificates only'.
   */
  documentation?: string | undefined;
  _documentation?: Element | undefined;

}