import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * An external specification that the content is mapped to.
 */
export interface StructureDefinitionMapping extends BackboneElement {

  /**
   * Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
   */
  comment?: string | undefined;
  _comment?: Element | undefined;
  /**
   * The specification is described once, with general comments, and then specific mappings are made that reference this declaration.
   */
  identity: string;
  _identity?: Element | undefined;
  /**
   * A name for the specification that is being mapped to.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * A formal identity for the specification being mapped to helps with identifying maps consistently.
   */
  uri?: string | undefined;
  _uri?: Element | undefined;

}