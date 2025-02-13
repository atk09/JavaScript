class Student {

    constructor(name, ID, dept) {
        this.name = name;
        this.ID = ID;
        this.dept = dept;
    }

    introduce() {
        console.log(`hello!, my name and ID are ${this.name}, ${this.ID} and I study in dept ${this.dept}`);
    }
}

class Department extends Student {


    constructor(name, ID, dept) {
        super(name, ID, dept);
    }

    science() {
        console.log(`I am a student ${this.name}`);
    }
}

const student1 = new Department('Ayesha', '1234', 'Physics');
student1.introduce();
student1.science();