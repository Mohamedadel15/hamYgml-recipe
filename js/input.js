var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
const signIn = document.querySelector(".input-submit");

function login() {
  x.style.left = "27px";
  y.style.right = "-350px";
  z.style.left = "0px";
}
function register() {
  x.style.left = "-350px";
  y.style.right = "25px";
  z.style.left = "150px";
}

// view password codes

function myLogPassword() {
  var a = document.getElementById("logPassword");
  var b = document.getElementById("eye");
  var c = document.getElementById("eye-slash");

  if (a.type === "password") {
    a.type = "text";
    b.style.opacity = "0";
    c.style.opacity = "1";
  } else {
    a.type = "password";
    b.style.opacity = "1";
    c.style.opacity = "0";
  }
}

function myRegPassword() {
  var d = document.getElementById("regPassword");
  var b = document.getElementById("eye-2");
  var c = document.getElementById("eye-slash-2");

  if (d.type === "password") {
    d.type = "text";
    b.style.opacity = "0";
    c.style.opacity = "1";
  } else {
    d.type = "password";
    b.style.opacity = "1";
    c.style.opacity = "0";
  }
}


//  check password and user mail 
signIn.addEventListener("click", (e) => {
  if (
    document.getElementById("logPassword").value != "01095885109" &&
    document.getElementById("regUser").value != "mohamed@gmail.com"
  ) {
    document.querySelector("div.overlay").style =
      "visibility:visible;opacity:1;";
  } else {
    window.location.href = "index1.html";
  }
  console.log(document.getElementById("logPassword").value);
});

document
  .querySelector(".overlay .popup .close")
  .addEventListener("click", hidePopup);

//   function to fide popup un valid 
function hidePopup() {
  document.querySelector("div.overlay").style = "visibility:hidden;opacity:0;";
}


