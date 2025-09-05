import 'reflect-metadata';
import { Element } from './Element';
import { Meta } from '../elements';
export declare abstract class Resource extends Element {
    abstract readonly resourceType: string;
    implicitRules?: string;
    _implicitRules?: Element;
    language?: string;
    _language?: Element;
    meta?: Meta;
    constructor(source?: Partial<Resource>);
}
//# sourceMappingURL=Resource.d.ts.map