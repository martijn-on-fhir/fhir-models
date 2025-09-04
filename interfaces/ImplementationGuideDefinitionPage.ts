import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
 */
export interface ImplementationGuideDefinitionPage extends BackboneElement {

  /**
   * A code that indicates how the page is generated.
   */
  generation: ('html'|'markdown'|'xml'|'generated');
  _generation?: Element | undefined;
  /**
   * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
   */
  nameUrl?: string | undefined;
  _nameUrl?: Element | undefined;
  /**
   * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
   */
  nameReference?: Reference | undefined;
  /**
   * The implementation guide breadcrumbs are generated from this structure.
   */
  page?: ImplementationGuideDefinitionPage[] | undefined;
  /**
   * A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
   */
  title: string;
  _title?: Element | undefined;

}