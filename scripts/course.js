// THE COURSES CONTENT OF THE PAGE
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

createCourse(courses);

const allLink = document.querySelector("#all");
allLink.addEventListener("click", () => {
    createCourse(courses);
})

const cseLink = document.querySelector("#cse");
cseLink.addEventListener("click", () => {
    createCourse(courses.filter(course => course.subject == "CSE"));
})

const wddLink = document.querySelector("#wdd");
wddLink.addEventListener("click", () => {
    createCourse(courses.filter(course => course.subject == "WDD"));
})


function createCourse(filteredCourses){
    document.querySelector(".container").innerHTML = "";
    
    let credits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);

    const creditsInfo = document.querySelector("#credits");
    creditsInfo.textContent = `The total of credits in these courses is: ${credits}`;

    filteredCourses.forEach(course =>{
        let card = document.createElement("section");
        let name = document.createElement("h3");

        name.textContent = course.subject + "-"+ course.number;

        if (course.completed) {
            card.setAttribute("class", "botones completed");
        }
        else{
            card.setAttribute("class", "botones not-completed");
        }

        card.appendChild(name);
        document.querySelector(".container").appendChild(card);

        card.addEventListener("click", () =>{
            displayCourseDetails(course);
        });
    });
}

const CourseDetails = document.querySelector("#course-details");

// ESTO ES PARA EL MODAL QUE APARECE CUANDO SE CLICKEAN LOS CURSOS
function displayCourseDetails(course){
    CourseDetails.innerHTML = "";
    CourseDetails.innerHTML = `
        <button id="closeModal">X</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology}</p>
    `;
    CourseDetails.showModal();

    closeModal.addEventListener("click", () => {
        CourseDetails.close();
    });
}
