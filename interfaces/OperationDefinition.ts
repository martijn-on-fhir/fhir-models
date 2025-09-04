import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { OperationDefinitionOverload } from './OperationDefinitionOverload';
import { OperationDefinitionParameter } from './OperationDefinitionParameter';
import { UsageContext } from './UsageContext';

/**
 * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
 */
export interface OperationDefinition extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'OperationDefinition';
  /**
   * What http methods can be used for the operation depends on the .affectsState value and whether the input parameters are primitive or complex:
   * 1. Servers SHALL support POST method for all operations.
   * 2. Servers SHALL support GET method if all the parameters for the operation are primitive or there are no parameters and the operation has affectsState = false.
   */
  affectsState?: boolean | undefined;
  _affectsState?: Element | undefined;
  /**
   * A constrained profile can make optional parameters required or not used and clarify documentation.
   */
  base?: string | undefined;
  _base?: Element | undefined;
  /**
   * The name used to invoke the operation.
   */
  code: string;
  _code?: Element | undefined;
  /**
   * Additional information about how to use this operation or named query.
   */
  comment?: string | undefined;
  _comment?: Element | undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: ContactDetail[] | undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the operation definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * This description can be used to capture details such as why the operation definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the operation definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the operation definition is presumed to be the predominant language in the place the operation definition was created).
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Allows filtering of operation definitions that are appropriate for use versus not.
   */
  experimental?: boolean | undefined;
  _experimental?: Element | undefined;
  /**
   * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
   */
  inputProfile?: string | undefined;
  _inputProfile?: Element | undefined;
  /**
   * Indicates whether this operation can be invoked on a particular instance of one of the given types.
   */
  instance: boolean;
  _instance?: Element | undefined;
  /**
   * It may be possible for the operation definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: CodeableConcept[] | undefined;
  /**
   * Named queries are invoked differently, and have different capabilities.
   */
  kind: ('operation'|'query');
  _kind?: Element | undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
   */
  outputProfile?: string | undefined;
  _outputProfile?: Element | undefined;
  /**
   * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
   */
  overload?: OperationDefinitionOverload[] | undefined;
  /**
   * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
   */
  parameter?: OperationDefinitionParameter[] | undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the operation definition is the organization or individual primarily responsible for the maintenance and upkeep of the operation definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the operation definition. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string | undefined;
  _publisher?: Element | undefined;
  /**
   * This element does not describe the usage of the operation definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this operation definition.
   */
  purpose?: string | undefined;
  _purpose?: Element | undefined;
  /**
   * If the type is an abstract resource ("Resource" or "DomainResource") then the operation can be invoked on any concrete specialization.
   */
  resource?: string[] | undefined;
  _resource?: Element[] | undefined;
  /**
   * Allows filtering of operation definitions that are appropriate for use versus not.
   */
  status: ('draft'|'active'|'retired'|'unknown');
  _status?: Element | undefined;
  /**
   * Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
   */
  system: boolean;
  _system?: Element | undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string | undefined;
  _title?: Element | undefined;
  /**
   * Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).
   */
  type: boolean;
  _type?: Element | undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: string | undefined;
  _url?: Element | undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: UsageContext[] | undefined;
  /**
   * There may be different operation definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the operation definition with the format [url]|[version].
   */
  version?: string | undefined;
  _version?: Element | undefined;

}