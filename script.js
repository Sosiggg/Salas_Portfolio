document.addEventListener("DOMContentLoaded", function () {
    fetch("courses.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load JSON file");
            }
            return response.json();
        })
        .then(data => {
            displayCourses(data.courses);
        })
        .catch(error => {
            console.error("Error fetching JSON:", error);
            document.getElementById("courses").innerHTML = "<p>Failed to load courses.</p>";
        });
});

function displayCourses(courses) {
    const coursesContainer = document.getElementById("course-list");
    coursesContainer.innerHTML = "";

    courses.forEach(course => {
        coursesContainer.innerHTML += `
            <h3>${course.year} - ${course.semester}</h3>
            <ul>
                ${course.subjects.map(subject => `<li>${subject}</li>`).join("")}
            </ul>
        `;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const courses = [
        "Introduction to HTML & CSS",
        "JavaScript Basics",
        "Advanced JavaScript",
        "React for Beginners",
        "Database Management with MySQL",
        "Responsive Web Design",
        "UI/UX Fundamentals",
        "Python Programming",
        "Cybersecurity Essentials"
    ];

    const courseList = document.getElementById("course-list");
    courseList.innerHTML = ""; // Clear default "Loading courses..."

    courses.forEach(course => {
        const li = document.createElement("li");
        li.textContent = course;
        courseList.appendChild(li);
    });
});

function searchCourses() {
    const searchInput = document.getElementById("searchBar").value.toLowerCase();
    const courseItems = document.querySelectorAll("#course-list li");

    courseItems.forEach(course => {
        if (course.textContent.toLowerCase().includes(searchInput)) {
            course.style.display = "list-item";
        } else {
            course.style.display = "none";
        }
    });
}
