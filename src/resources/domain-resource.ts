import {Resource} from "./resource";
import {Narrative} from "../elements/narrative";
import {Extension} from "../elements/extension";

export class DomainResource {

    text?: Narrative

    contained?: Resource

    extension?: Extension

    modifierExtension?: Extension
}
