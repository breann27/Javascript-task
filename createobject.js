const student1={
    name:"Aditya",
    rollno:1,
    phoneno:982246758,
    email:"aditya@gmail.com",
}

const student2={
    name:"Rhea",
    rollno:2,
    phoneno:978646758,
    email:"rhea@gmail.com",
}

const student3={
    name:"Priya",
    rollno:3,
    phoneno:978566758,
    email:"priya@gmail.com",
}

function createstudentsobjects(name,
    rollno,
    phoneno,
    email,
){
    let tempStudents={
        name:name,
        rollno:rollno,
        phoneno:phoneno,
        email:email,
    }
    return tempStudents;
}
function student(name,rollno,phoneno,email){
    this.name=name;
    this.rollno=rollno;
    this.phoneno=phoneno;
    this.email=email;

    return this;
}
const student4= {...student2};

    

