function test(person) {
    person.age = 20
    person = {
      name: '袁总',
      age: 30
    }
    return person
  }
  const p1 = {
    name: '胡总',
    age: 25
  }
  const p2 = test(p1)
  console.log(p1);
  console.log(p2);