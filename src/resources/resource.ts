import {Meta} from "../elements/meta";
import {Code} from "../elements/code";

export class Resource {

    id?: string

    meta?: Meta = new Meta()

    implicitRules?: string

    language?: Code

}
