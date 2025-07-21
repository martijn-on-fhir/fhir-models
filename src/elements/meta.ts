import {Coding} from "./coding";

export class Meta {

    versionId?: string

    lastUpdated?: string

    source?: string

    profile: string[] = []

    security: Coding[] = []

    tag?: Coding[]
    
    constructor(properties: Partial<Meta>) {
        Object.assign(this, properties)
    }
}
