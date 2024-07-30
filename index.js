function handleSubmit(){
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let regex = /^[a-zA-z0-9]+@[a-z0-9]+\.[a-z]{2,}$/;

    if (regex.test(email)){
        if(password.length > 8){
            console.log(email, password);
            alert("Validation Success");
        }else{
            alert("Password Incorrect");
        }
    }else{
        alert("Validation Failure ! Email incorrect");
    }
}