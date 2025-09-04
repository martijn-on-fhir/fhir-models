import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { ValueSetExpansionContains } from './ValueSetExpansionContains';
import { ValueSetExpansionParameter } from './ValueSetExpansionParameter';

/**
 * Expansion is performed to produce a collection of codes that are ready to use for data entry or validation. Value set expansions are always considered to be stateless - they are a record of the set of codes in the value set at a point in time under a given set of conditions, and are not subject to ongoing maintenance.
 * Expansion.parameter is  a simplified list of parameters - a subset of the features of the [Parameters](parameters.html) resource.
 */
export interface ValueSetExpansion extends BackboneElement {

  /**
   * The codes that are contained in the value set expansion.
   */
  contains?: ValueSetExpansionContains[] | undefined;
  /**
   * Typically, this uri is a UUID (e.g. urn:uuid:8230ff20-c97a-4167-a59d-dc2cb9df16dd).
   */
  identifier?: string | undefined;
  _identifier?: Element | undefined;
  /**
   * Paging only applies to flat expansions. If a filter is applied, the count is the number of concepts that matched the filter, not the number of concepts in an unfiltered view of the expansion.
   */
  offset?: number | undefined;
  /**
   * The server decides which parameters to include here, but at a minimum, the list SHOULD include all of the parameters that affect the $expand operation. If the expansion will be persisted all of these parameters SHALL be included. If the codeSystem on the server has a specified version then this version SHALL be provided as a parameter in the expansion (note that not all code systems have a version).
   */
  parameter?: ValueSetExpansionParameter[] | undefined;
  /**
   * This SHOULD be a fully populated instant, but in some circumstances, value sets are expanded by hand, and the expansion is published without that precision.
   */
  timestamp: string;
  _timestamp?: Element | undefined;
  /**
   * Paging only applies to flat expansions.
   */
  total?: number | undefined;

}