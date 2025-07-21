import 'reflect-metadata';

import {Patient} from './resources/patient'
import {HumanName} from './elements/human-name'
import {Meta} from './elements/meta'
import {Identifier} from './elements/identifier'


const p = new Patient({
  meta: new Meta({
    profile: ['http://fhir.nl/fhir/StructureDefinition/nl-core-patient']
  }),
  identifier: [
    new Identifier({
      system: 'http://fhir.nl/fhir/NamingSystem/bsn',
      value: '1234567890'
    })
  ],
  name: [new HumanName({
    text: 'john Doe'
  })]
})

const dummy = 0
