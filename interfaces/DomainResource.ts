import { Extension } from './Extension';
import { FhirResource } from './FhirResource';
import { Narrative } from './Narrative';
import { Resource } from './Resource';

/**
 * A resource that includes narrative, extensions, and contained resources.
 */
export interface DomainResource extends Resource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: string;
  /**
   * This should never be done when the content can be identified properly, as once identification is lost, it is extremely difficult (and context dependent) to restore it again. Contained resources may have profiles and tags In their meta elements, but SHALL NOT have security labels.
   */
  contained?: FhirResource[] | undefined;
  /**
   * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
   */
  extension?: Extension[] | undefined;
  /**
   * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
   */
  modifierExtension?: Extension[] | undefined;
  /**
   * Contained resources do not have narrative. Resources that are not contained SHOULD have a narrative. In some cases, a resource may only have text with little or no additional discrete data (as long as all minOccurs=1 elements are satisfied).  This may be necessary for data from legacy systems where information is captured as a "text blob" or where text is additionally entered raw or narrated and encoded information is added later.
   */
  text?: Narrative | undefined;

}