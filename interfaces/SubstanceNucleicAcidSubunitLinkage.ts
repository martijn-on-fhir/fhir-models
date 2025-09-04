import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Identifier } from './Identifier';

/**
 * The linkages between sugar residues will also be captured.
 */
export interface SubstanceNucleicAcidSubunitLinkage extends BackboneElement {

  /**
   * The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified.
   */
  connectivity?: string | undefined;
  _connectivity?: Element | undefined;
  /**
   * Each linkage will be registered as a fragment and have an ID.
   */
  identifier?: Identifier | undefined;
  /**
   * Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * Residues shall be captured as described in 5.3.6.8.3.
   */
  residueSite?: string | undefined;
  _residueSite?: Element | undefined;

}