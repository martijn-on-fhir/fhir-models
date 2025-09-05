import 'reflect-metadata';
import { Element } from './Element';
import { Meta } from '../elements';
export declare abstract class Resource {
    abstract readonly resourceType: string;
    id?: string;
    _id?: Element;
    implicitRules?: string;
    _implicitRules?: Element;
    language?: string;
    _language?: Element;
    meta?: Meta;
    constructor(source?: Partial<Resource>);
}
//# sourceMappingURL=Resource.d.ts.map