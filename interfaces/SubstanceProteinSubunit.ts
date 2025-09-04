import { Attachment } from './Attachment';
import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Identifier } from './Identifier';

/**
 * This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times.
 */
export interface SubstanceProteinSubunit extends BackboneElement {

  /**
   * The modification at the C-terminal shall be specified.
   */
  cTerminalModification?: string | undefined;
  _cTerminalModification?: Element | undefined;
  /**
   * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.
   */
  cTerminalModificationId?: Identifier | undefined;
  /**
   * Length of linear sequences of amino acids contained in the subunit.
   */
  length?: number | undefined;
  /**
   * The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified.
   */
  nTerminalModification?: string | undefined;
  _nTerminalModification?: Element | undefined;
  /**
   * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.
   */
  nTerminalModificationId?: Identifier | undefined;
  /**
   * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence.
   */
  sequence?: string | undefined;
  _sequence?: Element | undefined;
  /**
   * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence.
   */
  sequenceAttachment?: Attachment | undefined;
  /**
   * Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts.
   */
  subunit?: number | undefined;

}