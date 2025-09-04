import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { MolecularSequenceQuality } from './MolecularSequenceQuality';
import { MolecularSequenceReferenceSeq } from './MolecularSequenceReferenceSeq';
import { MolecularSequenceRepository } from './MolecularSequenceRepository';
import { MolecularSequenceStructureVariant } from './MolecularSequenceStructureVariant';
import { MolecularSequenceVariant } from './MolecularSequenceVariant';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * Raw data describing a biological sequence.
 */
export interface MolecularSequence extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'MolecularSequence';
  /**
   * Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end).
   */
  coordinateSystem: number;
  /**
   * The method for sequencing, for example, chip information.
   */
  device?: Reference | undefined;
  /**
   * A unique identifier for this particular sequence instance. This is a FHIR-defined id.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall start from referenceSeq.windowStart and end by referenceSeq.windowEnd.
   */
  observedSeq?: string | undefined;
  _observedSeq?: Element | undefined;
  /**
   * The patient whose sequencing results are described by this resource.
   */
  patient?: Reference | undefined;
  /**
   * The organization or lab that should be responsible for this result.
   */
  performer?: Reference | undefined;
  /**
   * Pointer to next atomic sequence which at most contains one variant.
   */
  pointer?: Reference[] | undefined;
  /**
   * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
   */
  quality?: MolecularSequenceQuality[] | undefined;
  /**
   * The number of copies of the sequence of interest. (RNASeq).
   */
  quantity?: Quantity | undefined;
  /**
   * Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence.
   */
  readCoverage?: number | undefined;
  /**
   * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
   */
  referenceSeq?: MolecularSequenceReferenceSeq | undefined;
  /**
   * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
   */
  repository?: MolecularSequenceRepository[] | undefined;
  /**
   * Specimen used for sequencing.
   */
  specimen?: Reference | undefined;
  /**
   * Information about chromosome structure variation.
   */
  structureVariant?: MolecularSequenceStructureVariant[] | undefined;
  /**
   * Amino Acid Sequence/ DNA Sequence / RNA Sequence.
   */
  type?: ('aa'|'dna'|'rna') | undefined;
  _type?: Element | undefined;
  /**
   * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
   */
  variant?: MolecularSequenceVariant[] | undefined;

}