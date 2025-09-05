import 'reflect-metadata';
import { Element } from '../base/Element';
import { ContactDetail } from './ContactDetail';
export declare class Contributor extends Element {
    contact?: ContactDetail[];
    name: string;
    _name?: Element;
    type: ('author' | 'editor' | 'reviewer' | 'endorser');
    _type?: Element;
    constructor(source?: Partial<Contributor>);
}
//# sourceMappingURL=Contributor.d.ts.map