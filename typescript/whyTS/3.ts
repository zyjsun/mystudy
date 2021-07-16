interface User {
  name: string;
  age: number;
  occupation: string;
  // role?: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
  // occupation?: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
  }
];

export function logPerson(person: Person) {
  let additionalInformation: string;
  if ("role" in person) {
    //in导致person会自动推导类型为Admin
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);