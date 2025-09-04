import 'reflect-metadata';
import { Resource } from '../base/Resource';
import { ParametersParameter } from '../backbone/ParametersParameter';
export declare class Parameters extends Resource {
    readonly resourceType: "Parameters";
    parameter?: ParametersParameter[];
    constructor(source?: Partial<Parameters>);
}
//# sourceMappingURL=Parameters.d.ts.map