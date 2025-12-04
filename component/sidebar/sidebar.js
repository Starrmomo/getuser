 const arrow = document.getElementById("leftlogo")
const content = document.querySelectorAll('.switch');

arrow.addEventListener("click", function () {
    if (content[0].classList.contains("hidden")) {
        content.forEach(item => item.classList.remove("hidden"));
        arrow.src = "/assets/images/left.svg";
    } else {
        content.forEach(item => item.classList.add("hidden"));
        arrow.src = "/assets/images/right.svg";
    }
});

const logout = document.getElementById("logout")
logout.addEventListener("click", function(){
    window.location="http://127.0.0.1:5500/modules/login/login.html"
})