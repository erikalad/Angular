const username: string | number = 'erika';
const sum = (a:number, b:number) => {
  return a + b
}

/* sum(1,'asd'); //ya da error */
sum(1,2)

class Person {
  age:number; //si le pongo private age:number no puedo usarlo fuera del constructor
  lastName: string;

  constructor(age:number,lastName:string){
    this.age = age;
    this.lastName = lastName;
  }

}

//ESTAS DOS COSAS ES LO MISMO PERO CON MENOS CODIGO

class Person2 {
  constructor( public age:number, public lastName:string){}
}

const eri = new Person(28,'Ladner');

