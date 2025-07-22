import {Resource} from "./resource";
import {Narrative} from "../elements/narrative";
import {Extension} from "../elements/extension";
import {Type} from 'class-transformer'

export class DomainResource extends Resource {

    @Type(() => Narrative)
    text: Narrative = new Narrative();
    
    @Type(() => Resource)
    contained: Resource[] = []
    
    @Type(() => Extension)
    extension: Extension[] = []
    
    @Type(() => Extension)
    modifierExtension: Extension[] = []

    constructor() {
        super();
    }
}
