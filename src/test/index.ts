import {Patient} from "../resources/patient";
import {HumanName} from "../elements/human-name";
import {Practitioner} from "../resources/practitioner";

console.log('he hi hallo')

const p = new Patient({
    id: 'xyz-123',
    active: true,
    name: [new HumanName({
        text: 'John Doe',
    })]
})
const dummy = null
