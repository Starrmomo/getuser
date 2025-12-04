 /*const leftcontain = document.getElementById("leftlogo")
 const namecontain = document.getElementsByClassName("switch")

 leftcontain.addEventListener("click",() =>{
    console.log("leftcontain")
if (namecontain[0].classList.contains ("hidden") ){
    namecontain.forEach(item => item.classList.remove("hidden") )
    leftcontain.src="/asset/images/right.svg"
}
else{
    namecontain.forEach(item => item.classList.add("hidden") )
    leftcontain.src="/asset/images/left.svg"
}





 })
*/


 const leftcontain = document.getElementById("leftlogo")
const namecontain = document.getElementsByClassName("switch")

leftcontain.addEventListener("click", () => {
    console.log("leftcontain")

    // convert HTMLCollection → Array
    const items = Array.from(namecontain)

    if (items[0].classList.contains("hidden")) {
        items.forEach(item => item.classList.remove("hidden"))
        leftcontain.src = "/asset/images/right.svg"
    } else {
        items.forEach(item => item.classList.add("hidden"))
        leftcontain.src = "/asset/images/left.svg"
    }
})

const logoutcontain = document.getElementById("logout")

logoutcontain.addEventListener("click" ,() => {
    window.location = "http://127.0.0.1:5500/modules/login/login.html"
    
})











 