import {Patient} from "../resources/patient";
import {HumanName} from "../elements/human-name";

const patient = new Patient({
    id: 'xyz-123',
    active: true,
    name: [new HumanName({
        text: 'John Doe',
    })]
})
const dummy = null
