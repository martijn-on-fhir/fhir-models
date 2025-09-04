import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { TerminologyCapabilitiesExpansionParameter } from './TerminologyCapabilitiesExpansionParameter';

/**
 * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
 */
export interface TerminologyCapabilitiesExpansion extends BackboneElement {

  /**
   * Whether the server can return nested value sets.
   */
  hierarchical?: boolean | undefined;
  _hierarchical?: Element | undefined;
  /**
   * Allow request for incomplete expansions?
   */
  incomplete?: boolean | undefined;
  _incomplete?: Element | undefined;
  /**
   * Whether the server supports paging on expansion.
   */
  paging?: boolean | undefined;
  _paging?: Element | undefined;
  /**
   * Supported expansion parameter.
   */
  parameter?: TerminologyCapabilitiesExpansionParameter[] | undefined;
  /**
   * This documentation should cover things like case sensitivity,  use of punctuation if not ignored, what wild cards are supported (if any), whether text is starts with or contains, and whether word order matters.
   */
  textFilter?: string | undefined;
  _textFilter?: Element | undefined;

}