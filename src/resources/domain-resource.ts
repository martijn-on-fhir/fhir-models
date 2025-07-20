import {Resource} from "./resource";
import {Narrative} from "../elements/narrative";
import {Extension} from "../elements/extension";

export class DomainResource extends Resource {

    text: Narrative = new Narrative();

    contained?: Resource

    extension?: Extension

    modifierExtension?: Extension

    constructor() {
        super();
    }
}
