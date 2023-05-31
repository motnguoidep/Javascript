const header = document.querySelector("header")
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scroll > 100)
})
// let menu = document.querySelector("#menu-icon")
// let navlist = document.querySelector(".navlist")
// menu.onclick = () => {
//     menu.classList.toggle("bn-x")
//     navlist.classList.toggle("open")
// }

// window.onscroll = () => {
//     menu.classList.remove("bx-x")
//     navlist.classList.remove("open")
// }

var name = document.getElementById("name")
var email = document.getElementById("email")
var phone = document.getElementById("phone")
var message = document.getElementById("message")

function check() {
    if (name == "") {
        document.getElementById("name").innerHTML = "Please enter your name"
        return false
    }
    if (email == "") {
        document.getElementById("email").innerHTML = "Please enter your email"
        return false
    }
    if (phone == "") {
        document.getElementById("phone").innerHTML = "P;ease enter your phone"
        return false
    }
    if (message == "") {
        document.getElementById("message").innerHTML = "Please your message in here"
        return false
    } else {
        alert("Dang nhap thanh cong!")
    }
}