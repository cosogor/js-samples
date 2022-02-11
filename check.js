console.clear();
console.log('string2');
let x=-5, y='-5';
class _Class {};
let clas = new _Class;

console.log(x/y);
console.log(x%y);
console.log(x*y);
console.log(4**0.5);
console.log(x,y);
console.log(typeof(x), typeof(y));

console.log(result=x==y);
console.log(result=x!=y);
console.log(result=x!==y);
console.log(result=x>=y);
console.log(result=x<=y);
console.log(result=x<y);
console.log(result=x>y);

console.log(result=x>y?x:y);
console.log(x>y?x:y);

let _true  = true;
let _false = false;

console.log(_true && _true);
console.log(_false && _false);
console.log(_true && _false);
console.log(_true || _true);
console.log(_false || _false);
console.log(_true || _false);
console.log(! _true);
console.log(! _false);
// XOR
console.log(_true  ^ _true);
console.log(_false ^ _false);
console.log(_true  ^ _false);

console.log('typeof');
console.log(typeof 'String');
console.log(typeof 123);
console.log(typeof 123.23);
console.log(typeof _true);
console.log(typeof clas);
console.log(typeof NaN);
console.log(typeof null);
console.log(typeof function(){});
console.log(typeof {name:'asd', age:10}); //structure
console.log(typeof { }); //class or structure?
console.log(typeof myClass); // undefined class
console.log(typeof [1,3,4,5,6,7,8,345]); //array
 
console.log('instanceof');
console.log( new String('String') instanceof String);
console.log(new Number(123) instanceof Number);
console.log(new Number(123.12) instanceof Number);
console.log(new Boolean (true) instanceof Boolean);
console.log(clas instanceof _Class);
console.log('Bitwise ops');
let I = 1;
let A = 3;              // 00000011
let B = 5;              // 00000101
console.log(A & B);     // 00000001 = 1 AND
console.log(A | B);     // 00000111 = 7 OR
console.log(A ^ B);     // 00000110 = 6 XOR
console.log(~ B);       // 11111010 = -6 NOT
console.log(1<<1);      //left shift to 1 pos 00000010 = 2
console.log(1<<2);      //left shift to 1 pos 00000100 = 4
console.log(1<<3);      //left shift to 1 pos 00001000 = 8
console.log(1<<4);      //left shift to 1 pos 00010000 = 16
console.log(1<<5);      //left shift to 1 pos 00100000 = 32
console.log(1<<6);      //left shift to 1 pos 01000000 = 64
console.log(1<<7);      //left shift to 1 pos 10000000 = 128

console.log(128>>1);   //right shift to 1 pos 01000000 = 64
console.log(128>>2);   //right shift to 1 pos 00100000 = 32
console.log(128>>3);   //right shift to 1 pos 00010000 = 16
console.log(128>>4);   //right shift to 1 pos 00001000 = 8
console.log(128>>5);   //right shift to 1 pos 00000100 = 4
console.log(128>>6);   //right shift to 1 pos 00000010 = 2
console.log(128>>7);   //right shift to 1 pos 00000001 = 1

console.log(128>>>8);   //sign right shift to 1 pos 00000001 = 1 


console.log('if else else if');
if (x !=-5){
    console.log('if');
}
else if (x!=-5) {
    console.log('else if');
}
else {
    console.log('else');
}

console.log('switch case');
for (let i = 1; i<=6; i++){
    switch (i){
        case 1: 
            console.log(i);
            break;
        case 2: 
            console.log(i);
            break;
        case 3: 
            console.log(i);
            break;
        case 4: 
            console.log(i);
            break;
        case 5: 
            console.log(i);
            break;
        default:
            console.log('not of above');
    }
}

console.log('for');
let fruits = ['apple', 'orange', 'banana', 'peach', 'mango']
for (let x in fruits){
    console.log(fruits[x]);
}

console.log('while');
let z = 1
while(z <= 5)
{
    console.log(z);
    z+=1;
}

console.log('do while');
do {
    console.log(z);
    z-=1;
}
while (z >= 0)

console.log('Arrays');

let numbers = [1,2,3,4,5,6,7,8,9];
let letters = ['a','b','c','d','e','f','g','h'];
let cars1 = ['audi', 'bmw', 'citroen', 'dodge'];
let cars2 = new Array ('audi', 'bmw', 'citroen', 'dodge'); //dynamical array
let n=0;
for (n in numbers){
    console.log(numbers[n]);
}
for (n in letters){
    console.log(letters[n]);
}
for (n in cars1){
    console.log(cars1[n]);
}
for (c of cars1)
{
    console.log(c); 
}
console.log(cars2[n]);
cars2[n] = 'daewoo';
cars1.push('electocar');
cars2.push('electocar');
console.log(cars1);
console.log(cars1.length);
console.log(cars2);
console.log(cars2.length);
console.log(letters);
console.log(letters.length);
console.log(numbers);
console.log(numbers.length);


console.log('Arrays functions');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('mango');
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('apple');
console.log(fruits);
delete fruits[1];   // delete elenent and taying epty item
console.log(fruits);
fruits[1] = 'Mocha'
console.log(fruits);
fruits.splice(1,2); // delete elements without empty items
console.log(fruits);
fruits.splice(1,0,'orange','banana');  // insert elements
console.log(fruits);
let fruits1 = fruits.slice(1,3); // copy some data to new array
console.log(fruits);
console.log(fruits1);
let fruits2 = fruits.splice(0,3); // cut some data to new array
console.log(fruits);
console.log(fruits2);
fruits=fruits1.concat(fruits); // concatenate some arrays to one
console.log(fruits);
let allarrays = fruits.concat(numbers,cars1,cars2,fruits1);
console.log(allarrays);

console.log('Simply classes');
class employee1{
    constructor(name, id){
        this.name1 = name;
        this.id1 = id;
    }
    name1;
    id1;
}

class employee2{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    getName(){
        return (this.name);
    }
    getId(){
        return (this.id);
    }
    setName(name){
        this.name = name;
    }
    setId(id){
        this.id = id;
    }
    printData(){
        console.log(this.name);
        console.log(this.id);
    }

}

let emp1 = new employee1('Boba',1);
let emp2 = new employee2('Jaja',2);

console.log(emp1.name1);
console.log(emp1.id1);
console.log(emp2.name);
console.log(emp2.id);
console.log(emp2.getName());
console.log(emp2.getId());
emp2.setName('Yoda');
emp2.setId(0);
emp2.printData();

class employeeWithPhone extends employee2
{
    constructor(name, id, phone){
        super(name, id);
        this.phone = phone;
    }
    setPhone(phone){
        this.phone = phone;
    }
    getPhone(){
        return(this.phone);
    }
    printData(){
        console.log(this.name);
        console.log(this.id);
        console.log(this.phone);
    }
}

let emp3 = new employeeWithPhone('Zeratool', 3, 89093330033);
console.log(emp3.getName());
console.log(emp3.getId());
console.log(emp3.getPhone());
emp3.setName('Zeratool3');
emp3.setId(33);
emp3.setPhone(333333333);
emp3.printData();



console.log('OOP Functions, protoypes');


function myFunction1 ()    // classcical way 
{
  return 0;
}
let em1 = myFunction1();
console.log(em1);


let myFunction2 = function(name, age)  //  define function as object
{
    this.name = name;
    this.age = age;

    this.getName = function(){
        return this.name;
    };
    this.getAge = function(){
        return this.age;
    };
};

let em20 = new myFunction2 ('Nikola', 20);
let em21 = new myFunction2 ('George', 30);
console.log(em20.getName());
console.log(em20.getAge());
console.log(em21.getName());
console.log(em21.getAge());


let myFunction3 = function(name, age)  //  define function as object 
{
    this.name = name;
    this.age = age;
    this.getName = function(){
        return this.name;
    }
    this.getAge = function(){
        return this.age;
    }
};
console.log('OOP Using prototypes');

myFunction3.prototype.getName3 = function(){
    return(this.name+'3');
};
myFunction3.prototype.getAge3 = function(){
    return(this.age+3);
};

let em3 = new myFunction3('Zorro', 10)

console.log(em3.getName());
console.log(em3.getAge());
console.log(em3.getName3());
console.log(em3.getAge3());


console.log('OOP Using polymorphysm');

class Animal {
    constructor(name){
        this.name = name;
    }
    eats(){
        console.log(this.name + ' eats food');
    }
}
let animal1 = new Animal('dog');

class Alligator extends Animal{
    constructor(name){
        super(name);
    }
    
    eats0(){ // call method of parent class forexample.
        super.eats(); 
    }
    eats(){ // redefining base method (polymorphysm)
 
        console.log(this.name + ' eats fish because redefined method using polymorphysm');
    }

}

let alligator1 = new Alligator ('Ali');
 
alligator1.eats0();
alligator1.eats();
console.log('OOP Abstraction');
let oopFunction = function (name, age, salary){ // constructor
    let localVariableBonus = 1000; // protected local variable visible just oopFunction
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.unprotectedFunction = function(){ // unprotected function
        console.log('calculate salary' + this.salary);
        protectedFunction();
    };
    let protectedFunction = function(){ // protected function
        console.log('calculate bonus ' + this.salary + localVariableBonus);
    };
};

emp4 = new oopFunction('John', 30, 1000);
console.log(emp4.name);
console.log(emp4.age);
console.log(emp4.salary);
console.log(emp4.localVariableBonus); // undefined error because variable unaccesiable.
emp4.unprotectedFunction(); 
// emp4.protectedFunction(); // TypeError: emp4.protectedFunction function unaccesiable.


