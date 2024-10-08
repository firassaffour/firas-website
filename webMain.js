var lognamefield = document.getElementById("logusername");
var logpasswordfield = document.getElementById("logpassword");
var signnamefield = document.getElementById("signusername");
var signemailfield = document.getElementById("signemail");
var signpasswordfield = document.getElementById("signpassword");
function signUppage(){
window.location = 'webSignup.html';
}
function thangsPage(){
    window.location = 'thanksPage.html';
    }
function signUpformfun(){
   var image = document.getElementById("logeyeimg");
   var div = document.getElementById("logInForm");
   var div2 = document.getElementById("signUpForm");
   lognamefield.value = "";
   logpasswordfield.value = "";
   image.src ="eyeon.png";
   logpasswordfield.type = "password";
   div.style.display = "none";
   div2.style.display = "block";
}
function loginformfun(){
    var image = document.getElementById("signeyeimg");
    var div = document.getElementById("signUpForm");
    var div2 = document.getElementById("logInForm");
   div.style.display = "none";
   div2.style.display = "block";
   image.src ="eyeon.png";
   signpasswordfield.type = "password";
   signnamefield.value = "";
   signemailfield.value = "";
   signpasswordfield.value = "";
}
function showlogpassword(){
    var image = document.getElementById("logeyeimg");
    if (logpasswordfield.type === "password"){
        logpasswordfield.type = "text";
        image.src ="eyeoff.png";
     }
     else{
         logpasswordfield.type = "password";
         image.src ="eyeon.png";
     }
    }
function showsignpassword(){
    var signpasswordfield = document.getElementById("signpassword");
    var image = document.getElementById("signeyeimg");
    if (signpasswordfield.type === "password"){
        signpasswordfield.type = "text";
        image.src ="eyeoff.png";
       }
       else{
        signpasswordfield.type = "password";
        image.src ="eyeon.png";
       }
      }
      var menulist = document.getElementById("nav-links")
      menulist.style.maxHeight = "0px";
      function showmenu(){
        image = document.getElementById("menuicon")
        button = document.getElementById("buttomSignup")
        if(menulist.style.maxHeight == "0px"){
            menulist.style.maxHeight = "300px";
            image.src = "xicon.png"
            button.style.display = "block";
        }
        else {
            menulist.style.maxHeight = "0px";
            image.src = "menuicon.png"
            button.style.display = "none";
        }
      }