import { auth, createUserWithEmailAndPassword } from "./firebaseConfig.js";

let user = document.querySelector("#email");
let pass = document.querySelector("#pass");
let form = document.querySelector("#form");

let validInfo = () => {

    
    let password = pass.value;

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }


    return true;
};




let getUser = async ()=>{
    try {
        
createUserWithEmailAndPassword(auth, user.value, pass.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    console.log("user has been registered");
    console.log(user);
    
    
    
  })
  

        
    } catch (error) {
        console.error(error);
        
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validInfo()) {
        getUser();
    }
    user.value = "";
    pass.value = "";
});