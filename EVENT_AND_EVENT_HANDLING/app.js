
// Topic : Add Eventlistener
// let h1 = document.querySelector("h1");
 // # click
// h1.addEventListener("click",function(){
//     h1.style.color = "red"
// })

// const { createElement } = require("react")

// const { createElement } = require("react")

// #dblclick
// let p = document.querySelector("p");
// p.addEventListener("dblclick",function(){
//     p.style.backgroundColor = "green"
// })
// // Remove EventListener
// p.removeEventListener("dblclick")

// #input
// let input = document.querySelector("input");

// input.addEventListener("input",function(){
//     console.log("typed");
    
// })

// let input = document.querySelector("input");

// input.addEventListener("input",function(details){
//     if(details.data === null){
//         console.log("backspace");
        
//     } else{
//         console.log(details.data);
        
//     }
// })

// #change

// let sel = document.querySelector("select");
// let device = document.querySelector("h3")

// sel.addEventListener("change",function(details){
//     console.log(details.target.value);
//     device.textContent = `${details.target.value} Device Selected`
//     device.style.color = "green"
    
// })

// #window
// let h1 = document.querySelector("h1")
//  window.addEventListener("keydown",function(details){
//   if(details.key === "Backspace"){
//     h1.textContent = "SPC"
//   }
//   else{
//     h1.textContent = details.key
//   }
  
    
// })

// btn wala part 

// let btn = document.querySelector("#btn");
// let input = document.querySelector("input")
// btn.addEventListener("click",function(){
//   input.click()

// })

// input.addEventListener("change",function(details){
//  btn.textContent = details.target.files[0].name
  
// })




// # SUBMIT

// let form = document.querySelector("form")
// let inputs = document.querySelectorAll("input")

// form.addEventListener("submit",function(details){
//   details.preventDefault()
 
  
// })


// MouseOver & MouseOut 

// let card = document.querySelector(".card")
// card.addEventListener("mouseover",function(){
//   card.style.backgroundColor = "yellow"
  
// })
// card.addEventListener("mouseout",function(){
//   card.style.backgroundColor = "red"
  
// })

// Mouse Move

// let card = document.querySelector(".card")
// window.addEventListener("mousemove",function(details){
//   card.style.top = details.clientY + "px"
//   card.style.left = details.clientX + "px"
  
// })



// event  bubbling 
// Jispe event aayega agar uspar listener nahi hua to hmara event uske parent par listener dhundhega aur aisa karte karte upar ki taraf move karega

//  let nav = document.querySelector("#nav")
//  nav.addEventListener("click",function(){
//   alert("Clicked")
//  })



// let ul = document.querySelector("ul")
// ul.addEventListener("click",function(details){
//  details.target.classList.toggle("lt")
// })




// practice question 1

// let h1 = document.querySelector("h1")
// let button = document.querySelector("button")

// button.addEventListener("click",function(){
//     h1.textContent = "Welcome"
// })



// practice question 2

// let h1 = document.querySelector("h1")
// let button = document.querySelector("button")

// button.addEventListener("click",function(){
//     h1.style.color = "red"
// })



//  practice question 3

// let h1 = document.querySelector("h1")
// let button = document.querySelector("button")

// button.addEventListener("click",function(){
//     if(h1.style.color ==="red"){
//         h1.style.color = "black"
//     }
//     else{
//         h1.style.color = "red"
//     }
// })


// practice question 4

// let h1 = document.querySelector("h1")
// let button = document.querySelector("button")
// let count = 0;

// button.addEventListener("click",function(details){
//     count++
    
//   h1.textContent = count
   
     
// })


// practice question 5

// let h1 = document.querySelector("h1")
// let plusButton = document.querySelector("#plusbutton")
// let minusButton = document.querySelector("#minusbutton")
// let count = 0;

// plusButton.addEventListener("click",function(){
//     count++
//     h1.textContent = count
// })
// minusButton.addEventListener("click",function(){
//     count--
//     h1.textContent = count
// })


// practice question 6

// let input = document.querySelector("input")
// let h2 = document.querySelector("h2")

// input.addEventListener("input",function(details){
//     h2.textContent = input.value
//     console.log(details);
    

// })


// practice question 7
// let input = document.querySelector("input")
// let button = document.querySelector("button")
// let ul = document.querySelector("ul")

// button.addEventListener("click",function(details){
//     let li = document.createElement("li")
//     let delBtn = document.createElement("button")
//     delBtn.textContent = "delete"
   
//      li.textContent = input.value
//      ul.appendChild(li);
//       li.appendChild(delBtn)

//       delBtn.addEventListener("click",function(){
//         li.remove()
//       })
      


//      input.value = ""
   

   
    
     
// })


// practice question 8

// let button = document.querySelector("button")
// let para = document.querySelector("p")

// button.addEventListener("click",function(){
//     if(button.textContent == "Hide"){
//          para.style.display = "none"
//         button.textContent = "Show"

//     }
   
//  else{
//        button.textContent = "Hide"
//        para.style.display = "block"
//     }
  
// })
 
// practice question 9

// let button = document.querySelector("button")
// let body = document.querySelector("body")

// button.addEventListener("click",function(){
//    if(button.textContent ==="Dark Mode"){
//      body.style.backgroundColor = "black"
//      button.textContent = "Light Mode"
//    }else{
//     body.style.backgroundColor = "white"
//     button.textContent = "Dark Mode"
//    }
// })


// practice question 10 

// let img = document.querySelector("img")
// img.addEventListener("mouseenter",function(){
//     img.src = "https://images.pexels.com/photos/34145802/pexels-photo-34145802.jpeg"
// })
// img.addEventListener("mouseleave",function(){
//     img.src = "https://images.pexels.com/photos/38101841/pexels-photo-38101841.jpeg"
// })


// practice question 11

// let input = document.querySelector("input")

// input.addEventListener("keydown", function(details){
//     console.log(details.key)
// })

// practice question 12

// let input = document.querySelector("input")
// let ul = document.querySelector("ul")

// input.addEventListener("keydown",function(details){
//     if(details.key == "Enter"){
//         let li = document.createElement("li")
//         let button = document.createElement("button")
//         button.textContent = "delete"
//         li.textContent = input.value
//         ul.appendChild(li)
//         li.appendChild(button)
//         input.value = ""


//           button.addEventListener("click",function(){
//         li.remove()
//     })
//     }
  
// })



// practice question 13

// let input = document.querySelector("input")
// let ul = document.querySelector("ul")

// input.addEventListener("keydown",function(details){
//     if(details.key ==="Enter"){
//         if(input.value.trim() === ""){
//     return;
// }
//         let li = document.createElement("li")
//         let button = document.createElement("button")
//         let delbutton = document.createElement("button")
//         let editbutton = document.createElement("button")
       
//         button.textContent = "Complete"
       
       
//         li.textContent = input.value
//         ul.appendChild(li)
//         li.appendChild(button)
//           delbutton.textContent = "Delete"
//         li.appendChild(delbutton)
//          editbutton.textContent = "Edit"
//          li.appendChild(editbutton)
        
//         input.value = ''

//         delbutton.addEventListener("click",function(){
//             li.remove()
//         })

//         button.addEventListener("click",function(){
//            if(button.textContent == "Complete"){
//              li.style.textDecoration = "line-through"
//              button.textContent = "Incomplete"
//            }
//            else{
//             li.style.textDecoration = ""
//             button.textContent = "Complete"
//            }
//         })
//     }

// })


// practice question 14

// let button = document.querySelector("button")
// let h2 = document.querySelector("h2")
// let count  = 0

// button.addEventListener("click",function(details){
// count++
   
//    h2.textContent = "Likes:"+ count

//    if(count== 10){
//     h2.textContent = "Likes:"+ count+"🎉"
//    }

  
    
// })

// practice question 15

// let img = document.querySelector("img")
// let button = document.querySelector("button")

// button.addEventListener("click",function(){
//     if(button.textContent == "Turn On"){
//         img.src = "https://images.pexels.com/photos/34923543/pexels-photo-34923543.jpeg"
//         button.textContent = "Turn Off"
//     }else{
//         img.src = "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg"
//         button.textContent = "Turn On"
//     }
   
// })

// practice question 16

// let textarea = document.querySelector("textarea")
// let h2 = document.querySelector("h2")

// textarea.addEventListener("input",function(details){
//    console.log(details);
//    h2.textContent = "Characters:"+ textarea.value.length
   
   
// })

// practice question 17

// let input = document.querySelector("input")
// let h2 = document.querySelector("h2")

// input.addEventListener("input",function(details){
//    if(input.value.length===0){
//       h2.textContent = ""
//    }
//   else if(input.value.length>0 && input.value.length<=4){
//       h2.textContent = "Weak Password"
//    }else if(input.value.length>4 && input.value.length<=8){
//       h2.textContent = "Medium Password"
//    }else if(input.value.length>=9){
//       h2.textContent = "Strong Password"
//    }
// })

// practice question 18

// let input = document.querySelector("input")
// let div = document.querySelector("div")

// input.addEventListener("input",function(details){
//    div.style.backgroundColor = input.value
  
   
// })






// TO-DO-LIST 


let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");
let h3 = document.querySelector("#total-task");
let completeTask = document.querySelector("#Complete-task");
let allDelBtn = document.querySelector(".del-btn");

button.addEventListener("click", addtask);

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addtask();
    }
});

// Local Storage se tasks load karo
loadTasks();

function addtask() {
    if (input.value.trim() === "") return;

    createTask(input.value, false);

    input.value = "";

    saveTasks();
}

function createTask(taskName, isCompleted) {
    let li = document.createElement("li");
    li.setAttribute("class","liList")

    let taskText = document.createElement("span");
    taskText.textContent = taskName;

    let complete = document.createElement("button");
    complete.setAttribute("class","complete-btn")
    
    let edit = document.createElement("button");
    edit.setAttribute("class","editButton")
    
    

    // edit.style.backgroundColor = "pink"
    let delBtn = document.createElement("button");
    delBtn.setAttribute("class","deleteButton")

    complete.textContent = isCompleted ? "Incomplete" : "Complete";
    edit.textContent = "Edit";
    delBtn.textContent = "Delete";

    if (isCompleted) {
        li.classList.add("completed");
        taskText.style.textDecoration = "line-through";
      
    }

    li.appendChild(taskText);
    li.appendChild(complete);
    li.appendChild(edit);
    li.appendChild(delBtn);

    ul.appendChild(li);

    updateTaskCount();
    updateCompletedtask();

    // Complete Button
    complete.addEventListener("click", function () {
        if (complete.textContent === "Complete") {
            taskText.style.textDecoration = "line-through";
            complete.style.backgroundColor= "red";
            complete.textContent = "Incomplete";
            li.classList.add("completed");
        } else {
            taskText.style.textDecoration = "";
            complete.style.backgroundColor = "green"
            complete.textContent = "Complete";
            li.classList.remove("completed");
        }

        updateCompletedtask();
        saveTasks();
    });

    // Edit Button
    edit.addEventListener("click", function () {
        let newTask = prompt("Enter New Task", taskText.textContent);

        if (newTask && newTask.trim() !== "") {
            taskText.textContent = newTask;
            saveTasks();
        }
    });

    // Delete Button
    delBtn.addEventListener("click", function () {
        li.remove();

        updateTaskCount();
        updateCompletedtask();

        saveTasks();
    });
}

// Save Tasks
function saveTasks() {
    let tasks = [];

    document.querySelectorAll("li").forEach((li) => {
        tasks.push({
            text: li.querySelector("span").textContent,
            completed: li.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load Tasks
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task) => {
        createTask(task.text, task.completed);
    });
}

// Total Task Counter
function updateTaskCount() {
    h3.textContent = "Total Task: " + ul.children.length;
}

// Completed Task Counter
function updateCompletedtask() {
    completeTask.textContent =
        "Completed Task: " +
        document.querySelectorAll(".completed").length;
}

// Delete All
allDelBtn.addEventListener("click", function () {
    let ans = confirm("Are you sure you want to delete all tasks?");

    if (ans) {
        ul.innerHTML = "";

        updateTaskCount();
        updateCompletedtask();

        localStorage.removeItem("tasks");
    }
});