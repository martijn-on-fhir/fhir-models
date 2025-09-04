import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { GraphDefinitionLink } from './GraphDefinitionLink';
import { GraphDefinitionLinkTargetCompartment } from './GraphDefinitionLinkTargetCompartment';

/**
 * Potential target for the link.
 */
export interface GraphDefinitionLinkTarget extends BackboneElement {

  /**
   * Compartment Consistency Rules.
   */
  compartment?: GraphDefinitionLinkTargetCompartment[] | undefined;
  /**
   * Additional links from target resource.
   */
  link?: GraphDefinitionLink[] | undefined;
  /**
   * At least one of the parameters must have the value {ref} which identifies the focus resource.
   */
  params?: string | undefined;
  _params?: Element | undefined;
  /**
   * Profile for the target resource.
   */
  profile?: string | undefined;
  _profile?: Element | undefined;
  /**
   * Type of resource this link refers to.
   */
  type: string;
  _type?: Element | undefined;

}