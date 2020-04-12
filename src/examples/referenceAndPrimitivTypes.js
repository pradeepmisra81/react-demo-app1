const person = {
    name: "Max"
};

const personReference = person;

const secondPerson = {
    ...person
}

console.log("person:",person);
console.log("personReference:",personReference);
console.log("secondPerson:",secondPerson);

person.name = "Manu";

console.log("person:",person);
console.log("personReference:",personReference);
console.log("secondPerson:",secondPerson);