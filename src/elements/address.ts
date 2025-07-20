import {Code} from "./code";
import {Period} from "./period";

export class Address {

    use?: Code

    type?: Code

    text?: string

    line?: string[]

    city?: string

    district?: string

    state?: string

    postalCode?: string

    country?: string

    period?: Period
}
