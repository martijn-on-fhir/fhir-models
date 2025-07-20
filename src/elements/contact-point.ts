import {Code} from "./code";
import {Period} from "./period";

export class ContactPoint {

    system?: Code

    value?: string

    use?: Code

    rank?: number

    period?: Period

    constructor(properties: Partial<ContactPoint>) {

        Object.assign(this, properties)
    }
}
