var listCoursesBlock =
    document.querySelector("#list-coursers") \
var courseAPI = "  http://localhost:3000/courses"

function start() {
    getCoursers(renderCourses);

}
start()
//functions
function getCoursers() {
    fetch(courseAPI)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function renderCourses(courses) {
    var listCoursesBlock =
        document.querySelector("#list-courses")
    var htmls = courses.map(function (course) {
        return
        <li>
            <h4>${course.name}</h4>
            <p>${course.description}</p>
        </li>
    })
    listCoursesBlock.innerHTML = htmls.join('')

}