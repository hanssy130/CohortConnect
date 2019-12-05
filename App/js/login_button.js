// Login page
// Allows user to sign-up or login
function login() {
    document.getElementById("login").onclick = ()=>
    {
        firebase.auth().signOut().then(function(){
            console.log("user login");
            window.location.href="login.html"
        }).catch(function(error){
            console.log("error")
        })
    }
}
login();
