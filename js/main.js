//start ovelay
setTimeout(() => {
  document.querySelector("body").style.opacity = "1";
}, 500);

// for invild email
let email = document.querySelector("input#Email");
let invalid = document.querySelector("span#invalid-email");
var validRegex = /([A-Z0-9._#%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6})/gi;

function ValidEmail() {
  if (!email.value.match(validRegex)) {
    invalid.innerHTML = "Valid email required";
    invalid.style.opacity = "1";
    invalid.style.top = "0";
    email.style.backgroundColor = "hsl(4.11deg 89.62% 58.43% / 16%)";
    email.style.borderColor = "red";
    email.style.color = "red";
    email.style.transition = "0.3s linear";
    return false;
  }

  invalid.innerHTML = " ";
  email.style.backgroundColor = "inherit";
  email.style.borderColor = "green";
  email.style.color = "inherit";
  return true;
}

//submit
document.querySelector("input#submit").onclick = (eve) => {
  eve.preventDefault();
  if (email.style.borderColor === "green") {
    let youremail = email.value;
    localStorage.setItem("email-value", youremail);
    document.querySelector(".container-sign-up").classList.add("active");
    document.querySelector(".container-success").classList.add("active");
    document.querySelector(".container-success").classList.add("rotate");
  }
};
//stop rotate in resize window
window.addEventListener("resize", () => {
  document.querySelector(".container-success").classList.remove("rotate");
});
