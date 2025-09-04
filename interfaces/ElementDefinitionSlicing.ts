import { Element } from './Element';
import { ElementDefinitionSlicingDiscriminator } from './ElementDefinitionSlicingDiscriminator';

/**
 * The first element in the sequence, the one that carries the slicing, is the definition that applies to all the slices. This is based on the unconstrained element, but can apply any constraints as appropriate. This may include the common constraints on the children of the element.
 */
export interface ElementDefinitionSlicing extends Element {

  /**
   * If it's really not possible to differentiate them, the design should be re-evaluated to make the content usable.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * If there is no discriminator, the content is hard to process, so this should be avoided.
   */
  discriminator?: ElementDefinitionSlicingDiscriminator[] | undefined;
  /**
   * Order should only be required when it is a pressing concern for presentation. Profile authors should consider making the order a feature of the rules about the narrative, not the rules about the data - requiring ordered data makes the profile much less re-usable.
   */
  ordered?: boolean | undefined;
  _ordered?: Element | undefined;
  /**
   * Allowing additional elements makes for a much for flexible template - it's open for use in wider contexts, but also means that the content of the resource is not closed, and applications have to decide how to handle content not described by the profile.
   */
  rules: ('closed'|'open'|'openAtEnd');
  _rules?: Element | undefined;

}