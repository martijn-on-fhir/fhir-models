import {Meta} from "../elements/meta";
import {Code} from "../elements/code";
import {Type} from "class-transformer";
import {IsOptional, IsString, ValidateNested} from "class-validator";

export class Resource {

    @IsOptional()
    @IsString()
    id?: string

    @ValidateNested()
    meta: Meta = new Meta({
        profile: []
    })

    @IsOptional()
    @IsString()
    implicitRules?: string

    @Type(() => Code)
    language?: Code

}
