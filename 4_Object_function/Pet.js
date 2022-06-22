class Student {
    constructor(gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }

    stringGPA() {
        return this.gpa.toString();
    }
    get level(){
       if(this.credits >90){
        return "Senior"
       }else if (this.credits<=90 && this.credits >= 61){
        return "Junior"
       }else if (this.credits <=60 && this.credits >=31){
        return  "Sophomore"
       }else{
        return  "Freshman"
       }
    }
}

const student = new Student(3.9, 31);
console.log(student.level)