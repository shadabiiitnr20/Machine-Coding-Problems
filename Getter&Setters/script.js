console.log('Hello');

//controlled access to object properties inside a class.

class Person {
  constructor(name) {
    this._name = name;
  }

  //The name of the methods should be the same as the property
  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val.toUpperCase();
  }
}

const p1 = new Person('Shadab');
console.log(`Test -> ${p1.name}`); //Shadab
p1.name = 'Hussain';
console.log(`Test -> ${p1.name}`); //HUSSAIN, in caps
