import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { ValueSetComposeInclude } from './ValueSetComposeInclude';

/**
 * A set of criteria that define the contents of the value set by including or excluding codes selected from the specified code system(s) that the value set draws from. This is also known as the Content Logical Definition (CLD).
 */
export interface ValueSetCompose extends BackboneElement {

  /**
   * Usually this is used to selectively exclude codes that were included by subsumption in the inclusions. Any display names specified for the codes are ignored.
   */
  exclude?: ValueSetComposeInclude[] | undefined;
  /**
   * Note that in the FHIR terminology framework, "deprecated" does not mean inactive, but in some code systems, e.g. LOINC, "deprecated" does mean inactive. Code systems should define what codes are considered to be inactive. If this is not clearly defined (including in the FHIR code system resource), then all codes are assumed to be active.
   * The Value Set Definition specification defines an ActiveOnly element, which is the reverse of this element e.g. (ValueSet.compose.inactive=FALSE) is the same as (VSD.ActiveOnly=TRUE).
   */
  inactive?: boolean | undefined;
  _inactive?: Element | undefined;
  /**
   * All the conditions in an include must be true. If a system is listed, all the codes from the system are listed. If one or more filters are listed, all of the filters must apply. If one or more value sets are listed, the codes must be in all the value sets. E.g. each include is 'include all the codes that meet all these conditions'.
   */
  include: ValueSetComposeInclude[];
  /**
   * With a defined lockedDate the value set is considered "Locked". Otherwise, the value set may have different expansions as underlying code systems and/or value sets evolve.  The interpretation of lockedDate is often dependent on the context - e.g. a SNOMED CT derived value set with a lockedDate will have a different expansion in USA than in UK.  If a value set specifies a version for include and exclude statements, and also specifies a locked date, the specified versions need to be available that date, or the value set will not be usable.
   */
  lockedDate?: string | undefined;
  _lockedDate?: Element | undefined;

}