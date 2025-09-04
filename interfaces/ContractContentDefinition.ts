import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
 */
export interface ContractContentDefinition extends BackboneElement {

  /**
   * A copyright statement relating to Contract precursor content. Copyright statements are generally legal restrictions on the use and publishing of the Contract precursor content.
   */
  copyright?: string | undefined;
  _copyright?: Element | undefined;
  /**
   * The date (and optionally time) when the contract was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the contract changes.
   */
  publicationDate?: string | undefined;
  _publicationDate?: Element | undefined;
  /**
   * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated.
   */
  publicationStatus: ('amended'|'appended'|'cancelled'|'disputed'|'entered-in-error'|'executable'|'executed'|'negotiable'|'offered'|'policy'|'rejected'|'renewed'|'revoked'|'resolved'|'terminated');
  _publicationStatus?: Element | undefined;
  /**
   * The  individual or organization that published the Contract precursor content.
   */
  publisher?: Reference | undefined;
  /**
   * Detailed Precusory content type.
   */
  subType?: CodeableConcept | undefined;
  /**
   * Precusory content structure and use, i.e., a boilerplate, template, application for a contract such as an insurance policy or benefits under a program, e.g., workers compensation.
   */
  type: CodeableConcept;

}