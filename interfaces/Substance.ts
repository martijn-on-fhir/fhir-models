import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { SubstanceIngredient } from './SubstanceIngredient';
import { SubstanceInstance } from './SubstanceInstance';

/**
 * A homogeneous material with a definite composition.
 */
export interface Substance extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Substance';
  /**
   * The level of granularity is defined by the category concepts in the value set.   More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in Substance.code.
   */
  category?: CodeableConcept[] | undefined;
  /**
   * This could be a reference to an externally defined code.  It could also be a locally assigned code (e.g. a formulary),  optionally with translations to the standard drug codes.
   */
  code: CodeableConcept;
  /**
   * A description of the substance - its appearance, handling requirements, and other usage notes.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * This identifier is associated with the kind of substance in contrast to the  Substance.instance.identifier which is associated with the package/container.
   */
  identifier?: Identifier[] | undefined;
  /**
   * A substance can be composed of other substances.
   */
  ingredient?: SubstanceIngredient[] | undefined;
  /**
   * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
   */
  instance?: SubstanceInstance[] | undefined;
  /**
   * A code to indicate if the substance is actively used.
   */
  status?: ('active'|'inactive'|'entered-in-error') | undefined;
  _status?: Element | undefined;

}