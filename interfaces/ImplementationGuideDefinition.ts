import { BackboneElement } from './BackboneElement';
import { ImplementationGuideDefinitionGrouping } from './ImplementationGuideDefinitionGrouping';
import { ImplementationGuideDefinitionPage } from './ImplementationGuideDefinitionPage';
import { ImplementationGuideDefinitionParameter } from './ImplementationGuideDefinitionParameter';
import { ImplementationGuideDefinitionResource } from './ImplementationGuideDefinitionResource';
import { ImplementationGuideDefinitionTemplate } from './ImplementationGuideDefinitionTemplate';

/**
 * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
 */
export interface ImplementationGuideDefinition extends BackboneElement {

  /**
   * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
   */
  grouping?: ImplementationGuideDefinitionGrouping[] | undefined;
  /**
   * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
   */
  page?: ImplementationGuideDefinitionPage | undefined;
  /**
   * Defines how IG is built by tools.
   */
  parameter?: ImplementationGuideDefinitionParameter[] | undefined;
  /**
   * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
   */
  resource: ImplementationGuideDefinitionResource[];
  /**
   * A template for building resources.
   */
  template?: ImplementationGuideDefinitionTemplate[] | undefined;

}