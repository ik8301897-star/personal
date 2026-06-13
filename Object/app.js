
// TOPIC : OBJECT & OBJECT LITERALS 
let user = {
    name : "Ishu Kumar",
    age: 19,
    course: "Mern",


    msg:function(){
        return(`Hello my name is ${this.name}`);
        
    }
}

console.log(user);

// Data access karne ke do tarike:
console.log(user.name); // 1. Dot Notatio
console.log(user["age"]); // 2. Bracket Notation
console.log(user.city = "Delhi"); // object ko add karna
console.log(user);

// Method ko call karna
console.log(user.msg());



TOPIC : CONSTRUCTOR

class Player{
    constructor(name,sport){
        this.name = name;
        this.sport = sport;
    }
    getDetails(){
        return`${this.name} plays ${this.sport}`
    }
}
let player1 = new Player ("Virat Kohli", "Cricket")
let player2 = new Player("Sunil Chetri", "football")
console.log(player1.getDetails());
console.log(player2.getDetails());




// TOPIC: INHERITANCE (EXTENDING CLASSES)

class User{
    constructor(username){
        this.username = username
    }
    login(){
        return`${this.username} has logged in successfully`
    }
}
class Admin extends User{
    deleteUser(targetUser){
        return`Admin ${this.username} deleted account of ${targetUser}`;

    }
}

let regularUser = new User("ishu06");
let adminUser = new Admin("Priya06");

console.log(regularUser.login());
console.log(adminUser.login());
console.log(adminUser.deleteUser("ishu06"));





// TOPIC : super() KEYWORD 



// #1 super() as a function (constructor ke andar)


class Shirt{
    constructor(size){
        this.size = size;
    }
}
class BrandShirt extends Shirt{
    constructor(size,brand){
        super(size);
        this.brand = brand
    }
    showDetails(){
        return`Size: ${this.size}, Brand: ${this.brand}`
    }
}
let myShirt = new BrandShirt("XL", "Nike");
console.log(myShirt.showDetails());



// #2 super as an Object (methods ke andar) super.methodname()

class NormalUser{
    greet(){
        return "Hello User!"
    }
}
class PremiumUser extends NormalUser{
    greet(){
        return `${super.greet()} Welcome to the VIP club.`
    }
}
let vip = new PremiumUser();
console.log(vip.greet());




// TOPIC POLYMORPHISM IN JAVASCRIPT

class Payment {
    processPayment(amount){
        return`Processing generic payment of Rs${amount}`
    }
}
class CreditCardPayment extends Payment{
    processPayment(amount){
        return `Paying Rs ${amount} using CreditCard(2% tax applied)`
    }
}
class UpiPayment extends Payment{
    processPayment(amount){
        return`Paying Rs ${amount} via UPI instantly using PIN.`
    }
}

function executePayment(paymentObject,amount){
    console.log(paymentObject.processPayment(amount));
    
}

const genericPay = new Payment();
const creditCardPay = new CreditCardPayment();
const upiPayment = new UpiPayment();

executePayment(genericPay,500)
executePayment(creditCardPay, 1200)
executePayment(upiPayment,1000)




// TOPIC ABSTRACTION IN JAVASCRIPT

class AtmMachine{
    #bankbalance = 50000;
    #validatePin(pin){
        return pin === 1234;
    }
    #checkCashAvailability(amount){
        return amount <= this.#bankbalance
    }
    withdrawCash(amount,pin){
        if(!this.#validatePin(pin)){
            return "Invalid PIN ! transaction Denied"
        }
        if(!this.#checkCashAvailability(amount)){
            return "Insufficent Balance !"
        }
        this.#bankbalance -= amount;
        return `Take Your Cash: Rs${amount}, Remaining Balance : Rs ${this.#bankbalance}`
    }
}
let myAtm = new AtmMachine();
console.log(myAtm.withdrawCash(1000,1234));

let myAtm2 = new AtmMachine();
console.log(myAtm2.withdrawCash(20000,1234));
