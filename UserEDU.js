let userInfo = document.querySelector("#user_info");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logoutBtn = document.querySelector("#logout");

let username = localStorage.getItem("username");
if (username) {
  links.remove();
  // userInfo.style.display = "flex";
  userDom.innerHTML="Hello"+" "+username;
}

// if(username.value === "" ){
//   userDom.innerHTML="<h2> Hello "+getUser.value+"</h2>"
// }

logoutBtn.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "RegisterEDU.html";
  }, 1500);
});
