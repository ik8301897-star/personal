

// // practice question 1

// class Student {
//     constructor(name,age){
//         this.name = name;
//         this.age = age
//     }
// }

// let student1 = new Student("ishu",20)
// console.log(student1);




// // practice question 2

// class car{
//     constructor(brand,model){
//         this.brand = brand;
//         this.model = model
//     }
// }

// let car1 = new car("BMW","X5")
// console.log(car1);




// // practice question 3

// class Mobile{
//     constructor(company,price){
//         this.company = company;
//         this.price = price
//     }
// }
// let mobileONe = new Mobile("Samsung",20000)
// let mobileTwo = new Mobile("Apple",80000)

// console.log(mobileONe,mobileTwo);



// practice question 4

// class Student{
//     constructor(name){
//         this.name = name
//     }
//     sayHello(){
//         console.log(`Hello ${this.name}`);
        
//     }
// }

// let ishu = new Student("ishu")
// ishu.sayHello()



// practice question 5

// class Dog{
//     constructor(name){
//         this.name = name
//     }
//     bark(){
//         console.log(`${this.name} is barking`);
        
//     }
// }

// let tom = new Dog("tom")
// tom.bark()



// // practice question 6

// class Book{
//     constructor(title,author){
//         this.title = title;
//         this.author = author
//     }
//     info(){
//         console.log(`Book: ${this.title}\n Author:${this.author}`);
        
//     }
// }

// let ishu = new Book("JavaScript","ishu")
// ishu.info()




// // practice question 7

// class Bankaccount{
//     constructor(accountHolder,balance){
//         this.accountHolder = accountHolder;
//         this.balance = balance;
//     }
//     clientInformation(){
//         console.log(`Account Holder: ${this.accountHolder}\n Balance: ${this.balance}`);
        
//     }
// }

// let ishu = new Bankaccount("Ishu",5000)
// ishu.clientInformation()




// practice question 8

class Bankaccount{
    
    constructor(accountHolder,balance,accountNumber){
        this.accountHolder = accountHolder;
        this.balance = balance
        this.accountNumber = accountNumber
        this.transactionHistory = [];
    }
    deposit(amount){
     this.balance =  this.balance + amount
      this.transactionHistory.push(`Deposited ${amount}`)
    
    }
    withdraw(amount){
        if(this.balance>=amount){
             this.balance = this.balance - amount
             this.transactionHistory.push(`Withdraw ${amount}`)
             

        }
       else{
        console.log(`Insuffcient Balance \n Your Current Balance ${this.balance}`);
        
       }
    }
    checkBalance(){
       console.log(`Account Holder: ${this.accountHolder}\nAccount Number:${this.accountNumber}\n Current Balance: ${this.balance}`);
  
    }
    showHistory(){
        console.log(this.transactionHistory);
        
    }
    transfer(receiver,amount){
        if(this.balance >=amount){
            receiver.balance = receiver.balance + amount
             this.balance = this.balance - amount
             this.transactionHistory.push(`Transferred ${amount} to ${receiver.accountHolder}`)

        }
        else{
            console.log(`Insufficient balance, Your Current Balance is ${this.balance}`);
            
        }
   
    }
}

let ishu = new Bankaccount("Ishu",5000,"12345")
let rahul = new Bankaccount("Rahul",3000,"67890")
ishu.deposit(1000)
ishu.transfer(rahul,3000)
ishu.checkBalance()
rahul.checkBalance()
ishu.showHistory()

// ishu.deposit(2000)
// ishu.withdraw(4000)
// ishu.deposit(1000)
// ishu.showHistory()
// // console.log(ishu.transactionHistory);

// // ishu.withdraw(3000)
// ishu.checkBalance()
// ishu.deposit(2000)
// ishu.checkBalance()
// ishu.withdraw(10000)



