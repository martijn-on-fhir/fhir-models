import { Attachment } from './Attachment';
import { CodeableConcept } from './CodeableConcept';
import { ContractContentDefinition } from './ContractContentDefinition';
import { ContractFriendly } from './ContractFriendly';
import { ContractLegal } from './ContractLegal';
import { ContractRule } from './ContractRule';
import { ContractSigner } from './ContractSigner';
import { ContractTerm } from './ContractTerm';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';
import { This } from './This';

/**
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 */
export interface Contract extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Contract';
  /**
   * Alternative representation of the title for this Contract definition, derivative, or instance in any legal state., e.g., a domain specific contract number related to legislation.
   */
  alias?: string[] | undefined;
  _alias?: Element[] | undefined;
  /**
   * Relevant time or time-period when this Contract is applicable.
   */
  applies?: Period | undefined;
  /**
   * The individual or organization that authored the Contract definition, derivative, or instance in any legal state.
   */
  author?: Reference | undefined;
  /**
   * A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.
   */
  authority?: Reference[] | undefined;
  /**
   * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
   */
  contentDefinition?: ContractContentDefinition | undefined;
  /**
   * The minimal content derived from the basal information source at a specific stage in its lifecycle.
   */
  contentDerivative?: CodeableConcept | undefined;
  /**
   * Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.
   */
  domain?: Reference[] | undefined;
  /**
   * Event resulting in discontinuation or termination of this Contract instance by one or more parties to the contract.
   */
  expirationType?: CodeableConcept | undefined;
  /**
   * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
   */
  friendly?: ContractFriendly[] | undefined;
  /**
   * Unique identifier for this Contract or a derivative that references a Source Contract.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or part by this Contract.
   */
  instantiatesCanonical?: Reference | undefined;
  /**
   * The URL pointing to an externally maintained definition that is adhered to in whole or in part by this Contract.
   */
  instantiatesUri?: string | undefined;
  _instantiatesUri?: Element | undefined;
  /**
   * When this  Contract was issued.
   */
  issued?: string | undefined;
  _issued?: Element | undefined;
  /**
   * List of Legal expressions or representations of this Contract.
   */
  legal?: ContractLegal[] | undefined;
  /**
   * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
   */
  legallyBindingAttachment?: Attachment | undefined;
  /**
   * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
   */
  legallyBindingReference?: Reference | undefined;
  /**
   * Legal states of the formation of a legal instrument, which is a formally executed written document that can be formally attributed to its author, records and formally expresses a legally enforceable act, process, or contractual duty, obligation, or right, and therefore evidences that act, process, or agreement.
   */
  legalState?: CodeableConcept | undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the Contract.  The Provence.entity indicates the target that was changed in the update. http://build.fhir.org/provenance-definitions.html#Provenance.entity.
   */
  relevantHistory?: Reference[] | undefined;
  /**
   * List of Computable Policy Rule Language Representations of this Contract.
   */
  rule?: ContractRule[] | undefined;
  /**
   * A selector of legal concerns for this Contract definition, derivative, or instance in any legal state.
   */
  scope?: CodeableConcept | undefined;
  /**
   * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
   * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
   */
  signer?: ContractSigner[] | undefined;
  /**
   * Sites in which the contract is complied with,  exercised, or in force.
   */
  site?: Reference[] | undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the contract as not currently valid or active.
   */
  status?: ('amended'|'appended'|'cancelled'|'disputed'|'entered-in-error'|'executable'|'executed'|'negotiable'|'offered'|'policy'|'rejected'|'renewed'|'revoked'|'resolved'|'terminated') | undefined;
  _status?: Element | undefined;
  /**
   * The Contract.subject is an entity that has some role with respect to the Contract.topic and Contract.topic.term, which is of focal interest to the parties to the contract and likely impacted in a significant way by the Contract.action/Contract.action.reason and the Contract.term.action/Contract.action.reason.
   * In many cases, the Contract.subject is a Contract.signer if the subject is an adult; has a legal interest in the contract; and incompetent to participate in the contract agreement.
   */
  subject?: Reference[] | undefined;
  /**
   * An explanatory or alternate user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
   */
  subtitle?: string | undefined;
  _subtitle?: Element | undefined;
  /**
   * Sub-category for the Contract that distinguishes the kinds of systems that would be interested in the Contract within the context of the Contract's scope.
   */
  subType?: CodeableConcept[] | undefined;
  /**
   * Information that may be needed by/relevant to the performer in their execution of this term action.
   */
  supportingInfo?: Reference[] | undefined;
  /**
   * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
   */
  term?: ContractTerm[] | undefined;
  /**
   * A short, descriptive, user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
   */
  title?: string | undefined;
  _title?: Element | undefined;
  /**
   * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
   */
  topicCodeableConcept?: CodeableConcept | undefined;
  /**
   * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
   */
  topicReference?: Reference | undefined;
  /**
   * A high-level category for the legal instrument, whether constructed as a Contract definition, derivative, or instance in any legal state.  Provides additional information about its content within the context of the Contract's scope to distinguish the kinds of systems that would be interested in the contract.
   */
  type?: CodeableConcept | undefined;
  /**
   * Used in a domain that uses a supplied contract repository.
   */
  url?: string | undefined;
  _url?: Element | undefined;
  /**
   * Note -  This is a business versionId, not a resource version id (see discussion http://build.fhir.org/resource.html#versions)
   * Comments - There may be different contract instances that have the same identifier but different versions. The version can be appended to the url in a reference to allow a reference to a particular business version of the plan definition with the format [url]|[version].
   */
  version?: string | undefined;
  _version?: Element | undefined;

}