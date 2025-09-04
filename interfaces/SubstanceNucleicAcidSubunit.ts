import { Attachment } from './Attachment';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { SubstanceNucleicAcidSubunitLinkage } from './SubstanceNucleicAcidSubunitLinkage';
import { SubstanceNucleicAcidSubunitSugar } from './SubstanceNucleicAcidSubunitSugar';

/**
 * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times.
 */
export interface SubstanceNucleicAcidSubunit extends BackboneElement {

  /**
   * The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant.
   */
  fivePrime?: CodeableConcept | undefined;
  /**
   * The length of the sequence shall be captured.
   */
  length?: number | undefined;
  /**
   * The linkages between sugar residues will also be captured.
   */
  linkage?: SubstanceNucleicAcidSubunitLinkage[] | undefined;
  /**
   * Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured.
   */
  sequence?: string | undefined;
  _sequence?: Element | undefined;
  /**
   * (TBC).
   */
  sequenceAttachment?: Attachment | undefined;
  /**
   * Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts.
   */
  subunit?: number | undefined;
  /**
   * 5.3.6.8.1 Sugar ID (Mandatory).
   */
  sugar?: SubstanceNucleicAcidSubunitSugar[] | undefined;
  /**
   * The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant.
   */
  threePrime?: CodeableConcept | undefined;

}