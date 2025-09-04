import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { ContactPoint } from '../elements/ContactPoint';
export declare class MessageHeaderSource extends BackboneElement {
    contact?: ContactPoint;
    endpoint?: string;
    _endpoint?: Element;
    name?: string;
    _name?: Element;
    software?: string;
    _software?: Element;
    version?: string;
    _version?: Element;
    constructor(source?: Partial<MessageHeaderSource>);
}
//# sourceMappingURL=MessageHeaderSource.d.ts.map