function handleSubmit(){
    event.preventDefault()
    let name = document.getElementById("userName").value;
    let email = document.getElementById("email1").value;
    let password = document.getElementById("pass").value;
    name = name.trim()
    email = email.trim()
    let emailformat= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // console.log(emailformat.test("abc@gmail.co"));
    if(emailformat.test(email) && password=== password){
        document.getElementById("home-page").style.visibility="visible";
        document.getElementById("topbar-name").innerHTML=name
        document.getElementById("login-page").style.display="none";
        document.getElementById("footer-footer").style.visibility="visible"
        document.getElementById("hero-section").style.visibility="visible"

        Toastify({
            text: "Login Successfully",
            duration: 3000,
            
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return;


        // window.location.href = "home.html";
        
    }
    else{
        Toastify({
            text: "Invalid Email",
            duration: 3000,
            
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }

}
let year = new Date().getFullYear();
document.getElementById("year").innerHTML=year