import 'reflect-metadata';
import { Element } from '../base/Element';
import { ContactPoint } from './ContactPoint';
export declare class ContactDetail extends Element {
    name?: string;
    _name?: Element;
    telecom?: ContactPoint[];
    constructor(source?: Partial<ContactDetail>);
}
//# sourceMappingURL=ContactDetail.d.ts.map