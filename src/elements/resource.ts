import {Code} from "./code";
import {Meta} from "./meta";

export class Resource {
    id?: string
    meta?: Meta
    implicitRules?: string
    language?: Code
}
