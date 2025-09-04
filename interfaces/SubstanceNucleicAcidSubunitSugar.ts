import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Identifier } from './Identifier';

/**
 * 5.3.6.8.1 Sugar ID (Mandatory).
 */
export interface SubstanceNucleicAcidSubunitSugar extends BackboneElement {

  /**
   * The Substance ID of the sugar or sugar-like component that make up the nucleotide.
   */
  identifier?: Identifier | undefined;
  /**
   * The name of the sugar or sugar-like component that make up the nucleotide.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above.
   */
  residueSite?: string | undefined;
  _residueSite?: Element | undefined;

}