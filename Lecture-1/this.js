const person = {
    name: "Vipul",
    greet: function(){console.log(this.name)}
}

person.greet()

const friend = {
    name:'sai',
}

friend.greet = person.greet
friend.greet()

const greet = person.greet.bind({name:'vipul chakravarthy'})
person.greet.call({name:'vipul chakravarthy'})
person.greet.apply({name:'vipul chakravarthy'})
greet()

const newPerson = {
    name:'tommy',
    greet: () => {console.log(this.name)}
}


newPerson.greet()