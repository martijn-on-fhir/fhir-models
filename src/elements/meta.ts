import {Coding} from "./coding";
import {IsDateString, IsOptional, ValidateNested} from 'class-validator'

export class Meta {

    @IsOptional()
    versionId?: string

    @IsOptional()
    @IsDateString()
    lastUpdated?: string

    @IsOptional()
    source?: string

    @ValidateNested()
    profile: string[] = []

    @ValidateNested()
    security: Coding[] = []

    @ValidateNested()
    tag: Coding[] = []

    constructor(properties?: Partial<Meta>) {
        Object.assign(this, properties)
    }
}
