import {Period} from "./period";
import {Code} from "./code";

export class HumanName {

    use?: Code

    text?: string

    family?: string

    given?: string

    prefix?: string

    suffix?: string

    period?: Period
}
