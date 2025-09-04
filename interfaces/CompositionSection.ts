import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Narrative } from './Narrative';
import { Reference } from './Reference';

/**
 * The root of the sections that make up the composition.
 */
export interface CompositionSection extends BackboneElement {

  /**
   * Identifies who is responsible for the information in this section, not necessarily who typed it in.
   */
  author?: Reference[] | undefined;
  /**
   * The code identifies the section for an automated processor of the document. This is particularly relevant when using profiles to control the structure of the document.
   * If the section has content (instead of sub-sections), the section.code does not change the meaning or interpretation of the resource that is the content of the section in the comments for the section.code.
   */
  code?: CodeableConcept | undefined;
  /**
   * The various reasons for an empty section make a significant interpretation to its interpretation. Note that this code is for use when the entire section content has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
   */
  emptyReason?: CodeableConcept | undefined;
  /**
   * If there are no entries in the list, an emptyReason SHOULD be provided.
   */
  entry?: Reference[] | undefined;
  /**
   * Typically, sections in a doument are about the subject of the document, whether that is a  patient, or group of patients, location, or device, or whatever. For some kind of documents, some sections actually contain data about related entities. Typical examples are  a section in a newborn discharge summary concerning the mother, or family history documents, with a section about each family member, though there are many other examples.
   */
  focus?: Reference | undefined;
  /**
   * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
   */
  mode?: ('working'|'snapshot'|'changes') | undefined;
  _mode?: Element | undefined;
  /**
   * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
   */
  orderedBy?: CodeableConcept | undefined;
  /**
   * Nested sections are primarily used to help human readers navigate to particular portions of the document.
   */
  section?: CompositionSection[] | undefined;
  /**
   * Document profiles may define what content should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative | undefined;
  /**
   * The title identifies the section for a human reader. The title must be consistent with the narrative of the resource that is the target of the section.content reference. Generally, sections SHOULD have titles, but in some documents, it is unnecessary or inappropriate. Typically, this is where a section has subsections that have their own adequately distinguishing title,  or documents that only have a single section. Most Implementation Guides will make section title to be a required element.
   */
  title?: string | undefined;
  _title?: Element | undefined;

}