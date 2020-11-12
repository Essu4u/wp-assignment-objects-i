  const student = {
    fname: "Lamin",
    lname: "Jabbi",
    department: "ITC",
    program: "Computer Science",
    class: "21",
    admittedDate: "2017",
    completedDate: "2021",

    greeting : function greetings() {
      return "peace, I am "+ this.fname + " " + this.lname +  " How are you?";
    }
    
  }
  alert(student.greeting());
// add course to student
student.courses = ['Java', 'Web Programming', 'Database', 'Networking', 'PLD']
 //delete class
  delete student.class ;

  // update admittedDate to 2020
  student.admittedDate = "2020";

//   Add a new property key called grades
  student.grades = [
    {
        code: "WP101",
      title: "Web Programming I",
      creditHrs: 2,
      grade: "C",  
  },
  {
        code: "DB101",
      title: "Database I",
      creditHrs: 2,
      grade: "A",  
  }
  ]
   
  

  
