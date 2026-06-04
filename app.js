import { auth, createUserWithEmailAndPassword } from "./firebaseConfig.js";

let user = document.querySelector("#email");
let pass = document.querySelector("#pass");
let form = document.querySelector("#form");

let validInfo = () => {

    
    if (!user.value.includes("@")) {
        alert("Email must contain @");
        return false;
    }

    
    let password = pass.value;

    let hasLetter = /[a-zA-Z]/.test(password);
    let hasNumber = /[0-9]/.test(password);

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    if (!hasLetter || !hasNumber) {
        alert("Password must contain letters and numbers");
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
    // ...
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
});