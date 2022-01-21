// Class code examples

// This is a function that will be attach to a GLOBAL object
// there the "this" keyword will point to the global object
function sayHelloFloating(){
    console.log("this object of a lfoating function", this) 
    console.log("this.firstname", this.firstName)
}

sayHelloFloating()

const person1 = {
    firstName: "Jordi",
    age: 28,
    city: "Valencia",
    sayHello(){
        
    }
}


// This function is attached to a "person1" object and the this keyword
// and therefore will refer to the person1

person1.sayHello()

const person2 = {
    firstName: "Daniel",
    age: 31,
    city: "Barcelona",
    sayHello(){
        console.log(`Buen dia, soy ${this.firstName}. I am ${this.age} years old`)
    }
}

person2.sayHello()

const abstractPerson = {
    sayHello(){
      return `Hello my name is ${this.name}`
    },
    tellAge(){
    return `I am ${this.age} years young`
    }
}



console.log(abstractPerson.tellAge())

// We bind our method to our object use () after to invoke the function
console.log(abstractPerson.tellAge.bind(person1)())




