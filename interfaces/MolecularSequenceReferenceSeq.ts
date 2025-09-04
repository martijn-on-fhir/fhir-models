import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
 */
export interface MolecularSequenceReferenceSeq extends BackboneElement {

  /**
   * Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).
   */
  chromosome?: CodeableConcept | undefined;
  /**
   * The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'.  Version number must be included if a versioned release of a primary build was used.
   */
  genomeBuild?: string | undefined;
  _genomeBuild?: Element | undefined;
  /**
   * A relative reference to a DNA strand based on gene orientation. The strand that contains the open reading frame of the gene is the "sense" strand, and the opposite complementary strand is the "antisense" strand.
   */
  orientation?: ('sense'|'antisense') | undefined;
  _orientation?: Element | undefined;
  /**
   * Reference identifier of reference sequence submitted to NCBI. It must match the type in the MolecularSequence.type field. For example, the prefix, “NG_” identifies reference sequence for genes, “NM_” for messenger RNA transcripts, and “NP_” for amino acid sequences.
   */
  referenceSeqId?: CodeableConcept | undefined;
  /**
   * A pointer to another MolecularSequence entity as reference sequence.
   */
  referenceSeqPointer?: Reference | undefined;
  /**
   * A string like "ACGT".
   */
  referenceSeqString?: string | undefined;
  _referenceSeqString?: Element | undefined;
  /**
   * An absolute reference to a strand. The Watson strand is the strand whose 5'-end is on the short arm of the chromosome, and the Crick strand as the one whose 5'-end is on the long arm.
   */
  strand?: ('watson'|'crick') | undefined;
  _strand?: Element | undefined;
  /**
   * End position of the window on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
   */
  windowEnd?: number | undefined;
  /**
   * Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
   */
  windowStart?: number | undefined;

}