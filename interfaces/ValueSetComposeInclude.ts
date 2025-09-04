import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { ValueSetComposeIncludeConcept } from './ValueSetComposeIncludeConcept';
import { ValueSetComposeIncludeFilter } from './ValueSetComposeIncludeFilter';

/**
 * All the conditions in an include must be true. If a system is listed, all the codes from the system are listed. If one or more filters are listed, all of the filters must apply. If one or more value sets are listed, the codes must be in all the value sets. E.g. each include is 'include all the codes that meet all these conditions'.
 */
export interface ValueSetComposeInclude extends BackboneElement {

  /**
   * The list of concepts is considered ordered, though the order might not have any particular significance. Typically, the order of an expansion follows that defined in the compose element.
   */
  concept?: ValueSetComposeIncludeConcept[] | undefined;
  /**
   * Selecting codes by specifying filters based on properties is only possible where the underlying code system defines appropriate properties. Note that in some cases, the underlying code system defines the logical concepts but not the literal codes for the concepts. In such cases, the literal definitions may be provided by a third party.
   */
  filter?: ValueSetComposeIncludeFilter[] | undefined;
  /**
   * If there are no codes or filters, the entire code system is included. Note that the set of codes that are included may contain abstract codes. See ''Coding.system'' for further documentation about the correct value for the system element.
   */
  system?: string | undefined;
  _system?: Element | undefined;
  /**
   * The value set URI is either a logical reference to a defined value set such as a [SNOMED CT reference set](snomedct.html#implicit), or a direct reference to a value set definition using ValueSet.url. The reference might not refer to an actual FHIR ValueSet resource; in this case, whatever is referred to is an implicit definition of a value set that needs to be clear about how versions are resolved.
   */
  valueSet?: string[] | undefined;
  _valueSet?: Element[] | undefined;
  /**
   * This is used when selecting the descendants of a concept - they may change between versions. If no version is specified, then the exact contents of the value set might not be known until a context of use binds it to a particular version. The special value '*' means all versions; It is at server discretion regarding expansions and which versions must be supported.
   */
  version?: string | undefined;
  _version?: Element | undefined;

}