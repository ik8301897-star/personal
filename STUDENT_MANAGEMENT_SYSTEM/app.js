


class Student{
    constructor(name,idNo,marks){
        this.name = name;
        this.idNo= idNo
        this.marks = marks;
    }
    showDetails(){
        console.log(`Name: ${this.name}\nidNumber: ${this.idNo}\nmarks:${this.marks}`);
        
    }
   
    showGrade(){
        if(this.marks >= 90 && this.marks<=100){
            console.log(`Grade:A`);
            
        }else if(this.marks>=80 && this.marks<90){
            console.log(`Grade:B`);
            
        }else if(this.marks>=70 && this.marks<80){
            console.log(`Grade:C`);
            
        }else if(this.marks>=60 && this.marks<70){
            console.log(`Grade:D`);
            
        }else if(this.marks>=50 && this.marks <60){
            console.log(`Grade:E`);
            
        } else if(this.marks>=0 && this.marks<50){
            console.log(`Grade:F`);
            
        }
    }
   
   
}

class Admin{
    constructor(){
        this.students = []
    }
    addstudent(student){
        this.students.push(student)
    }
    
    findStudent(idNo){
        for(let student of this.students ){
            if(student.idNo == idNo){
                student.showDetails()
            }
        }
    }
    removeLastStudent(){
        this.students.pop()
    }
    admitEmergencyStudent(name,idNo,marks){
      let student = new Student(name,idNo,marks)
      this.students.push(student)
       
    }
    showAllDetails(){
        for(let student of this.students){
            student.showDetails()
        }
    }
   showTopperStudent(){
    let topper = this.students[0]
    for(let student of this.students){
        if(student.marks>topper.marks){
            topper = student
           
        }
    }
     topper.showDetails()
   }
   countPassFailStudent(){
    let pass = 0;
    let fail = 0;

    for(let student of this.students){
        if(student.marks>=33){
            pass++
        }
        else{
            fail++
        }
    }
    console.log(`Pass Students: ${pass}`);
   console.log(`Fail Students: ${fail}`);
   }
   searchStudent(name){
    for(let student of this.students){
        if(student.name == name){
            student.showDetails()
        }
    }
    
   }
}


let ishu = new Student("ishu",101,80)
let aman = new Student("aman",102,87)
let rahul = new Student("rahul",103,88)


// ishu.showDetails()
// let ishu = new Student("Ishu",1,80)
// let rahul = new Student("rahul",2,65)
// let aman = new Student("Aman",3,68)
let admin1 = new Admin()
admin1.addstudent(ishu)
admin1.addstudent(aman)
admin1.addstudent(rahul)
// admin1.addstudent(rohit)
admin1.admitEmergencyStudent("rohit",103,87)
console.log(admin1.students);
// admin1.showTopperStudent()
admin1.countPassFailStudent()
admin1.searchStudent("ishu")
// admin1.showAllDetails()
// ishu.showDetails()

// admin1.findStudent(101)
// admin1.removeLastStudent()
// console.log(admin1.students);

// aman.showDetails()

// ishu.showDetails()
// let admin2 = new Admin()
// admin2.addstudent()
// admin1.addstudent(ishu)
// admin1.addstudent(rahul)
// console.log(admin1);
// aman.showDetails()
// admin1.removeLastStudent()
// let students = [ishu,rahul,aman]
// for(let student of students){
//     if(student.rollnumber == 2){
//  student.showDetails()
//     }
   
// }
// ishu.addpercentage(20)
// ishu.showGrade()
// ishu.showDetails()
// rahul.showDetails()
// aman.showDetails()
// ishu.markAttendance()
// rahul.markAttendance()
// aman.markAttendance()
// ishu.showAttendance()
// rahul.showAttendance()
// aman.showAttendance()