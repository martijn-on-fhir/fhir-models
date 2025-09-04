import { BackboneElement } from './BackboneElement';
import { Coding } from './Coding';
import { Element } from './Element';
import { QuestionnaireItemAnswerOption } from './QuestionnaireItemAnswerOption';
import { QuestionnaireItemEnableWhen } from './QuestionnaireItemEnableWhen';
import { QuestionnaireItemInitial } from './QuestionnaireItemInitial';

/**
 * The content of the questionnaire is constructed from an ordered, hierarchical collection of items.
 */
export interface QuestionnaireItem extends BackboneElement {

  /**
   * This element can be used when the value set machinery of answerValueSet is deemed too cumbersome or when there's a need to capture possible answers that are not codes.
   */
  answerOption?: QuestionnaireItemAnswerOption[] | undefined;
  /**
   * LOINC defines many useful value sets for questionnaire responses. See [LOINC Answer Lists](loinc.html#alist). The value may come from the ElementDefinition referred to by .definition.
   */
  answerValueSet?: string | undefined;
  _answerValueSet?: Element | undefined;
  /**
   * The value may come from the ElementDefinition referred to by .definition.
   */
  code?: Coding[] | undefined;
  /**
   * The uri refers to an ElementDefinition in a [StructureDefinition](structuredefinition.html#) and always starts with the [canonical URL](references.html#canonical) for the target resource. When referring to a StructureDefinition, a fragment identifier is used to specify the element definition by its id [Element.id](element-definitions.html#Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x]. In the absence of a fragment identifier, the first/root element definition in the target is the matching element definition.
   */
  definition?: string | undefined;
  _definition?: Element | undefined;
  /**
   * This element must be specified if more than one enableWhen value is provided.
   */
  enableBehavior?: ('all'|'any') | undefined;
  _enableBehavior?: Element | undefined;
  /**
   * If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.  This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met. When an item is disabled, all of its descendants are disabled, regardless of what their own enableWhen logic might evaluate to.
   */
  enableWhen?: QuestionnaireItemEnableWhen[] | undefined;
  /**
   * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that initial values can influence results.  The data type of initial[x] must agree with the item.type, and only repeating items can have more then one initial value.
   */
  initial?: QuestionnaireItemInitial[] | undefined;
  /**
   * There is no specified limit to the depth of nesting.  However, Questionnaire authors are encouraged to consider the impact on the user and user interface of overly deep nesting.
   */
  item?: QuestionnaireItem[] | undefined;
  /**
   * This ''can'' be a meaningful identifier (e.g. a LOINC code) but is not intended to have any meaning.  GUIDs or sequential numbers are appropriate here.
   */
  linkId: string;
  _linkId?: Element | undefined;
  /**
   * For base64binary, reflects the number of characters representing the encoded data, not the number of bytes of the binary data. The value may come from the ElementDefinition referred to by .definition.
   */
  maxLength?: number | undefined;
  /**
   * These are generally unique within a questionnaire, though this is not guaranteed. Some questionnaires may have multiple questions with the same label with logic to control which gets exposed.  Typically, these won't be used for "display" items, though such use is not prohibited.  Systems SHOULD NOT generate their own prefixes if prefixes are defined for any items within a Questionnaire.
   */
  prefix?: string | undefined;
  _prefix?: Element | undefined;
  /**
   * The value of readOnly elements can be established by asserting  extensions for defaultValues, linkages that support pre-population and/or extensions that support calculation based on other answers.
   */
  readOnly?: boolean | undefined;
  _readOnly?: Element | undefined;
  /**
   * If a question is marked as repeats=true, then multiple answers can be provided for the question in the corresponding QuestionnaireResponse.  When rendering the questionnaire, it is up to the rendering software whether to render the question text for each answer repetition (i.e. "repeat the question") or to simply allow entry/selection of multiple answers for the question (repeat the answers).  Which is most appropriate visually may depend on the type of answer as well as whether there are nested items.
   * The resulting QuestionnaireResponse will be populated the same way regardless of rendering - one 'question' item with multiple answer values.
   *  The value may come from the ElementDefinition referred to by .definition.
   */
  repeats?: boolean | undefined;
  _repeats?: Element | undefined;
  /**
   * Questionnaire.item.required only has meaning for elements that are conditionally enabled with enableWhen if the condition evaluates to true.  If an item that contains other items is marked as required, that does not automatically make the contained elements required (though required groups must contain at least one child element). The value may come from the ElementDefinition referred to by .definition.
   */
  required?: boolean | undefined;
  _required?: Element | undefined;
  /**
   * When using this element to represent the name of a section, use group type item and also make sure to limit the text element to a short string suitable for display as a section heading.  Group item instructions should be included as a display type item within the group.
   */
  text?: string | undefined;
  _text?: Element | undefined;
  /**
   * Additional constraints on the type of answer can be conveyed by extensions. The value may come from the ElementDefinition referred to by .definition.
   */
  type: ('group'|'display'|'question'|'boolean'|'decimal'|'integer'|'date'|'dateTime'|'time'|'string'|'text'|'url'|'choice'|'open-choice'|'attachment'|'reference'|'quantity');
  _type?: Element | undefined;

}