var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 5000);
} 




function logout() {
     localStorage.setItem("loged" , false);
     localStorage.setItem("sign","Sign in");
     document.getElementById('username_topLeft').innerHTML = localStorage.getItem("sign");
    document.getElementById('logout').style.display = "none";
    }


// determines wether an admin or a user logs in
function SignIn()
{
    var email = document.getElementById("E-mail").value;
    var password = document.getElementById("Password").value;
    
    if (email == "a@b" && password == "a@b")
    {
        localStorage.setItem("isAdmin", true);
    }
    else
    {
        localStorage.setItem("isAdmin", false);
        localStorage.setItem("user",document.getElementById("E-mail").value , true);
        localStorage.setItem("loged" , true);
    }

}




// allows editing content in home and about pages if an admin logs in
function editContent(numberOfFields)
{
    var isAdmin = localStorage.getItem("isAdmin");
    var use = localStorage.getItem("user");
    var loged = localStorage.getItem("loged");
    if (isAdmin == "true")
    {
        var username = document.getElementById("username_topLeft");
        username.innerHTML = "Admin0123@cis.asu.edu.eg";


        var s = "edit";

        for (let i = 1; i <= numberOfFields; i++)
        {
            x = s + i.toString();

            var edit = document.getElementById(x);
            edit.setAttribute("contenteditable", true);
        }
    }
    else if (isAdmin != "true" && loged == "true"){
      var user = localStorage.getItem("user");
      var name = document.getElementById("username_topLeft");
      name.innerHTML = user;
    }  
    else{
      document.getElementById('username_topLeft').innerHTML = localStorage.getItem("sign");
    document.getElementById('logout').style.display = "none";
    }
}


             
          

