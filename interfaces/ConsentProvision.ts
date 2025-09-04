import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { ConsentProvisionActor } from './ConsentProvisionActor';
import { ConsentProvisionData } from './ConsentProvisionData';
import { Element } from './Element';
import { Period } from './Period';

/**
 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 */
export interface ConsentProvision extends BackboneElement {

  /**
   * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
   */
  action?: CodeableConcept[] | undefined;
  /**
   * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
   */
  actor?: ConsentProvisionActor[] | undefined;
  /**
   * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
   */
  class?: Coding[] | undefined;
  /**
   * Typical use of this is a Document code with class = CDA.
   */
  code?: CodeableConcept[] | undefined;
  /**
   * The resources controlled by this rule if specific resources are referenced.
   */
  data?: ConsentProvisionData[] | undefined;
  /**
   * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
   */
  dataPeriod?: Period | undefined;
  /**
   * The timeframe in this rule is valid.
   */
  period?: Period | undefined;
  /**
   * Rules which provide exceptions to the base rule or subrules.
   */
  provision?: ConsentProvision[] | undefined;
  /**
   * When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   */
  purpose?: Coding[] | undefined;
  /**
   * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   */
  securityLabel?: Coding[] | undefined;
  /**
   * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
   */
  type?: ('deny'|'permit') | undefined;
  _type?: Element | undefined;

}