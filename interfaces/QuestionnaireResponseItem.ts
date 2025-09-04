import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { QuestionnaireResponseItemAnswer } from './QuestionnaireResponseItemAnswer';

/**
 * Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
 */
export interface QuestionnaireResponseItem extends BackboneElement {

  /**
   * The value is nested because we cannot have a repeating structure that has variable type.
   */
  answer?: QuestionnaireResponseItemAnswer[] | undefined;
  /**
   * The ElementDefinition must be in a [StructureDefinition](structuredefinition.html#), and must have a fragment identifier that identifies the specific data element by its id (Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x].
   * There is no need for this element if the item pointed to by the linkId has a definition listed.
   */
  definition?: string | undefined;
  _definition?: Element | undefined;
  /**
   * Questions or sub-groups nested beneath a question or group.
   */
  item?: QuestionnaireResponseItem[] | undefined;
  /**
   * The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.
   */
  linkId: string;
  _linkId?: Element | undefined;
  /**
   * Text that is displayed above the contents of the group or as the text of the question being answered.
   */
  text?: string | undefined;
  _text?: Element | undefined;

}