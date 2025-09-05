import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Resource } from '../elements/FhirResource';
export declare class ParametersParameter extends BackboneElement {
    name?: string;
    _name?: Element;
    part?: ParametersParameter[];
    resource?: Resource;
    valueBase64Binary?: string;
    _valueBase64Binary?: Element;
    valueBoolean?: boolean;
    _valueBoolean?: Element;
    valueCanonical?: string;
    _valueCanonical?: Element;
    valueCode?: string;
    _valueCode?: Element;
    valueDate?: string;
    _valueDate?: Element;
    valueDateTime?: string;
    _valueDateTime?: Element;
    valueDecimal?: number;
    valueId?: string;
    _valueId?: Element;
    valueInstant?: string;
    _valueInstant?: Element;
    valueInteger?: number;
    valueMarkdown?: string;
    _valueMarkdown?: Element;
    valueOid?: string;
    _valueOid?: Element;
    valuePositiveInt?: number;
    valueString?: string;
    _valueString?: Element;
    valueTime?: string;
    constructor(source?: Partial<ParametersParameter>);
}
//# sourceMappingURL=ParametersParameter.d.ts.map