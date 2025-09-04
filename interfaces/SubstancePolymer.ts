import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { SubstancePolymerMonomerSet } from './SubstancePolymerMonomerSet';
import { SubstancePolymerRepeat } from './SubstancePolymerRepeat';

/**
 * Todo.
 */
export interface SubstancePolymer extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'SubstancePolymer';
  /**
   * Todo.
   */
  class?: CodeableConcept | undefined;
  /**
   * Todo.
   */
  copolymerConnectivity?: CodeableConcept[] | undefined;
  /**
   * Todo.
   */
  geometry?: CodeableConcept | undefined;
  /**
   * Todo.
   */
  modification?: string[] | undefined;
  _modification?: Element[] | undefined;
  /**
   * Todo.
   */
  monomerSet?: SubstancePolymerMonomerSet[] | undefined;
  /**
   * Todo.
   */
  repeat?: SubstancePolymerRepeat[] | undefined;

}