// humein seekhna factories banana,matlab ki aap ek baar blueprint bana do ki her object kaisa dikhega and hum log naye naye objects with different values bana payyege , yahi upar upar se poora kaam hai OOPs mai 


// function createPencil(name,price,color,company){
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.company = company;
//     this.write = function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = color;
//         document.body.appendChild(h1)
//     }

// }
// // createPencil.prototype.company = "shreyians"
// let pencil1 = new createPencil("Nataraj",10,"red","nataraj")
// console.log(pencil1);

// let pencil2 = new createPencil("doms",10,"black","doms")

// console.log(pencil2);
// pencil2.write("hey how are yu")
// pencil1.write("mst hu")



// CLASS AND OBJECT 

// class CreatePencil{
//     constructor(name,company,price,color){
//         this.name = name;
//         this.company = company;
//         this.price = price;
//         this.color = color;
//     }
//     erase(){
//         document.body.querySelectorAll("h1").forEach((elem)=>{
//             if(elem.style.color === this.color){
//                 elem.remove()
//             }
//         })
//     }
//     write(text){
//         let h1 = document.createElement("h1")
//         h1.textContent = text;
//         h1.style.color = this.color
//         document.body.appendChild(h1)
//     }
// }
// let pencil1 = new CreatePencil("nataraj","nataraj",10,"red")
// let pencil2 = new CreatePencil("apsara","apsara",20,"blue")
// console.log(pencil1);

// pencil1.write("hello")
// pencil1.write("hello")
// pencil1.write("hello")
// pencil1.write("hello")
// pencil1.write("hello")
// pencil2.write("hey")
// pencil2.write("hey")
// pencil2.write("hey")
// pencil2.write("hey")
// pencil2.write("hey")
// pencil1.erase()
// pencil2.erase()



// EXTENDS AND SUPER 

// class User{
//     constructor(name,address,username,email){
//         this.name = name;
//         this.address = address;
//         this.username = username;
//         this.email = email;
//         this.role = "user";
//     }
//     write(text){
//         let h1 = document.createElement("h1")
//         h1.textContent =`${this.name} : ${text}`;
//         document.body.appendChild(h1)
//     }
// }
// class Admin extends User {
//     constructor(name,address,username,email){
//         super(name,address,username,email);
//         this.role = "admin"

//     }
//     remove(){
//         document.querySelectorAll("h1").forEach(function(elem){
//             elem.remove();
//         })
//     }
// }
// let u1 = new User("ishu","patna","ishu123","ishu@gmail.com")
// let u2 = new User("kh","patna","lk123","kh@gmail.com")
// u1.write("hello")
// u2.write("hey")
// let ad1 = new Admin("admin1","india","adminnnn","admin@gmail.com")