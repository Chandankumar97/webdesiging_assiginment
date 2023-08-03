const student ={
    firstname: "Jhon",
    lastname: "Doe",
    age: 30,
    occupation: "Army",
     //method inside the object
    sayHello: function(){
        console.log(`Hello, my name is ${this.firstname}${this.lastname}.i am ${this.age}years old`);
    }

};
  //Accessing object properties
console.log(student.firstname);
console.log(student.lastname);
console.log(student.age);
console.log(student.occupation);

student.sayHello();
