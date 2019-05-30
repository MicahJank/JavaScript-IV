// CODE here for your Lambda Classes
class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}


class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}


class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.faveSubjects = studentAttrs.faveSubjects;
    }

    listSubjects() {
        for(let i = 0; i < this.faveSubjects.length; i++) {
            console.log(this.faveSubjects[i]);
        }
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}


class ProjectManagers extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }

    standUp(channelName) {
        console.log(`${this.name} announces to ${channelName}, @channel standy times!`);
    }
    
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}



// Creating the new objects

// Person Objects
const austen = new Person({
    name: 'Austen',
    location: 'California',
    age: 35,
  });

const brad = new Person({
    name: 'Bradley',
    location: 'Florida',
    age: 24
});

//testing
// console.log(austen.name);
// console.log(brad.name);
// austen.speak();
// brad.speak();



// Instructor Objects
const josh = new Instructor({
    name: 'Josh',
    location: 'California',
    age: 34,
    specialty: 'Playing Banjo',
    favLanguage: 'Javascript',
    catchPhrase: 'Live long and prosper.'
});

const dan = new Instructor({
    name: 'Dan',
    location: 'Montana',
    age: 35,
    specialty: 'Teaching',
    favLanguage: 'C#',
    catchPhrase: 'Do, do not, there is no try.'
});


// Student Objects
const micah = new Student({
    name: 'Micah',
    location: 'Wisconsin',
    age: 27, 
    previousBackground: 'none', 
    className: 'WebPT7',
    faveSubjects: ['HTML', 'CSS', 'Javascript', 'C#']
});

const heather = new Student({
    name: 'Heather',
    location: 'California',
    age: 'unknown',
    previousBackground: 'none', 
    className: 'WebPT7',
    faveSubjects: ['HTML', 'CSS', 'Javascript']
});

const megan = new Student({
    name: 'Megan',
    location: 'California',
    age: 'unknown',
    previousBackground: 'none', 
    className: 'WebPT7',
    faveSubjects: ['HTML', 'CSS', 'Javascript']
});




// Project Manager Objects
const ryan = new ProjectManagers({
    name: 'Ryan',
    location: 'California',
    age: 30,
    specialty: 'Command Line',
    favLanguage: 'Javascript',
    catchPhrase: 'Hello I am Ryan.',
    gradClassName: 'Web17',
    favInstructor: 'Josh Knell'
});

const laryna = new ProjectManagers({
    name: 'Laryna',
    location: 'California',
    age: 'unknown',
    specialty: 'Javascript',
    favLanguage: 'Javascript',
    catchPhrase: 'Hello I am Laryna.',
    gradClassName: 'Web17',
    favInstructor: 'Dan Frehner'
});


// Testing

// console.log(josh.name, josh.location, josh.age, josh.specialty);
// josh.demo('Javascript');
// console.log(dan.name, dan.catchPhrase);
// dan.grade(micah, 'Javascript');

// console.log(micah.name, micah.className);
// micah.speak();
// heather.listSubjects();
// megan.PRAssignment('HTML Project');
// heather.sprintChallenge('Javascript Classes');

// ryan.speak();
// laryna.standUp('wept7_laryna');
// ryan.debugsCode(heather, 'Javascript');
// console.log(laryna.gradClassName);
// console.log(ryan.favInstructor);
// laryna.grade(micah, 'Javascript');