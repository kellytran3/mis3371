/*
    Author: Kelly Tran
    Date Created: 11/15/24
    Date Last Updated: 12/3/24
    Purpose: Homework 4 javascript portion for form 
*/

//dynamic 
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider
let slider = document.getElementById("range")
    let output = document.getElementById("range_slider")
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;}; 

//first name validate js code
function validateFname(){
    fname = document.getElementById("fname").value.trim(); 
    var namePattern = /^[a-zA-Z'-]+$/; 
    //checks if first name is empty 
    if (fname== ""){ 
        document.getElementById("fname-error").innerHTML = "First name box cannot be empty.";
        return false; 
    } else if (fname != "") {
        if (!fname.match(namePattern)){ //checks if first name box matches pattern 
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only."; 
        return false; 
    } else if (fname.length < 2){ //checks if characters in first name box is at least 1 character
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters."; 
        return false; 
    } else if (fname.length > 30){ //checks if first name has at most 30 characters
        document.getElementById("fname-error").innerHTML = "First name box cannot be more than 30 characters.";
        return false; 
    } else {
        document.getElementById("fname-error").innerHTML = ""; 
        return true; 
        }
    }   
}

//middle initial validate js portion 
function validateMinit(){
    let minit = document.getElementById("minit").value;
    const namePattern = /^[A-Z'-]$/; 

    //makes middle initial uppercase
    minit = minit.toUpperCase();
    document.getElementById("minit").value = minit; 

    //checks if middle initial is only one character
 if (!minit.match(namePattern)){ 
        document.getElementById("minit-error").innerHTML = "Middle Initial must contain one uppercase character only.";
        return false; 
    } else {
        document.getElementById("minit-error").innerHTML = ""; 
        return true; 
    }
}

//last name validation js portion 
function validateLname(){
    const lname = document.getElementById("lname").value.trim(); 
    var namePattern = /^[a-zA-Z'-]+$/; 
    //checks if last name is empty 
 if (lname== ""){ 
        document.getElementById("lname-error").innerHTML = "Last name box cannot be empty.";
        return false; 
    } else if (!lname.match(namePattern)){ //checks if last name box matches pattern 
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only."; 
        return false; 
    } else if (lname.length < 2){ //checks if characters in last name box is at least 1 character
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters."; 
        return false; 
    } else if (lname.length > 30){ //checks if last name has at most 30 characters
        document.getElementById("lname-error").innerHTML = "Last name box cannot be more than 30 characters.";
        return false; 
    } else {
        document.getElementById("lname-error").innerHTML = ""; 
        return true; 
    }
}

//dob validation js portion 
function validateDob(){
    const dob= document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date()-120);

    if(date > new Date()){
        document.getElementById("dob-error").innerHTML = "Date cannot be in the future";
        dob.value="";
        return false; 
    } else if(date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = "Date cannot be more than 120 years ago";
        dob.value= "";
        return false; 
    } else {
        document.getElementById("dob-error").innerHTML = ""; 
        return true;
    }
}

//ssn validation js portion
function validateSsn(){
    const ssn = document.getElementById("ssn").value;
    //regex for ssn pattern 
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/; 

if(!ssnR.test(ssn)){
    document.getElementById("ssn-error").innerHTML = "Please enter a valid Social Security Number";
    return false; 
} else {
    document.getElementById("ssn-error").innerHTML = "";
    return true; 
    }
}

//address line 1 validation js portion
function validateAddress1(){
    var ad1 = document.getElementById("address1").value; 
    console.log(ad1);
    console.log(ad1.length);

    if(ad1.length < 2){
        document.getElementById("address1-error").innerHTML = "Please enter information on address line";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true; 
    }
}

//city validation js portion
function validateCity(){
    city = document.getElementById("city").value.trim(); 

    if(!city) {
        document.getElementById("city-error").innerHTML = "City cannot be left blank.";
        return false; 
    } else {
        document.getElementById("city-error").innerHTML = " ";
        return true; 
    }
}

//zip code validation js portion
function validateZcode(){
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g, ""); //removes any characters that are not numbers and dashes

    if(!zip) {
        document.getElementById("zcode-error").innerHTML = "Zip code cannot be left blank";
        return false;
    }
    if(zip.length > 5){
        zip = zip.slice(0,5); //removes any digits after first 5 digits
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true; 
}

//email validation js portion 
function validateEmail() {
    let email = document.getElementById("email").value; 
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regex pattern for email

    if (email == ""){
        document.getElementById("email-error").innerHTML = "Email field cannot be empty";
        return false; 
    } else if (!email.match(emailR)){
        document.getElementById("email-error").innerHTML = "Please enter a valid email address";
        return false; 
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true; 
    }
}

//phone number validation js portion 
function validatePhnum() {
    const phoneInput = document.getElementById("phnum");
    const phoneError = document.getElementById("phnum-error");
    const phone = phoneInput.value.replace(/\D/g, ""); //removes any unwanted non digits characters

    if(phone.length == 0){
        phoneError.innerHTML = "Phone number field cannot be empty"; 
        return false;
    }

    const formattedPhone = phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6,10);
    phoneInput.value = formattedPhone; 
    phoneError.innerHTML = "";
    return true; 
} 

//username validation js portion 
function validateUname(){
    uname = document.getElementById("uname").value;

    //converts username to all lowercase
    uname = uname.toLowerCase(); 

    //displays username in all lowercase
    document.getElementById("uname").value = uname; 

    if (uname.length == 0){
        document.getElementById("uname-error").innerHTML = "Username Field cannot be left empty"; 
        return false; 
    }

    //verifies that username does not start with a number
    if (!isNaN(uname.charAt(0))){
        document.getElementById("uname-error").innerHTML = "Username cannot begin with a number";
        return false;
    }

    //verifies that the username only consists of letters, numbers, or underscores
    let regex = /^[a-zA-Z0-9_]+$/; 
    if (!regex.test(uname)){
        document.getElementById("uname-error").innerHTML = "Username field can only contain letters, numbers, or underscores"; 
        return false; 

        } else if (uname.length < 5) {
            document.getElementById("uname-error").innerHTML = "Username must contain at least 5 characters";
            return false; 
        //verifies that username does not have more than 30 characters
        } else if (uname.length > 30) {
            document.getElementById("uname-error").innerHTML =
            "Username cannot be more than 30 characters";
            return false; 
        } else { //if all of the above checks pass then username is valid
            document.getElementById("uname-error").innerHTML = "";
            return true; 
        }
    }

    //password validation javascript portion 
    function validatePword() {
        const pword = document.getElementById("pword").value
        const uname = document.getElementById("uname").value

        //sets up and initializes array
        const errorMessage = [];

        //checks for lowercase letters
        if (!pword.match(/[a-z]/)){
            errorMessage.push("Enter at least one lowercase letter"); 
        }

         //checks for uppercase letters
        if (!pword.match(/[A-Z]/)){
            errorMessage.push("Enter at least one uppercase letter"); 
    }
        //checks for numbers
        if (!pword.match(/[0-9]/)) {
            errorMessage.push("Enter at least one number");
        }

        //checks for special characters
        if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)){
            errorMessage.push("Enter at least one special character");
        }

        //checks for username not in password
        if (pword == uname || pword.includes(uname)){
            errorMessage.push("Password cannot contain username");
        }  

        //displays error messages if there is any errors
        const errorContainer = document.querySelector(".pword-message");
        errorContainer.innerHTML = errorMessage
        .map((message) => `<span>${message}</span><br/>`)
        .join("");
         return false;

}

    function confirmPword() {
        pword1 = document.getElementById("pword").value;
        pword2 = document.getElementById("conf_pass").value;

        if (pword1 !== pword2) {
            document.getElementById("conf-pword-error").innerHTML = "Passwords do not match";
            return false; 
        } else {
            document.getElementById("conf-pword-error").innerHTML = "Passwords match";
            return true; 
        }
} 

//redisplay user input back to user (review button)
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = ""; 
    var i; 
    formoutput += "<table class='output'><th colspan = '3'>Your Information:</th>"; 
    for (i = 0; i < formcontent.length; i++) {
        if(formcontent.elements[i].value !== ""){
            let datatype = formcontent.elements[i].type; 
            switch(datatype) {
                case "checkbox": 
                    if(formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align = 'right'>" +  formcontent.elements[i].name + "</td>"; 
                        formoutput = formoutput + "<td class='outputdata'>&#x2713;</td></tr>";
                    }
                    break;
                case "radio": 
                    if(formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align = 'right'>" + formcontent.elements[i].name + "</td>"; 
                        formoutput = "<td class = 'outputdata'>" + formcontent.elements[i].value + "</td></tr>"; 
                    }
                    break;
                case "button":
                case "submit":
                case "reset": 
                    break;
                default: 
                    formoutput = formoutput + "<tr><td align= 'right'>" + formcontent.elements[i].name + "</td>"; 
                    formoutput = formoutput + "<td class = 'outputdata'>" + formcontent.elements[i].value + "</td></tr>"; 
            }
        }
    }
    if (formoutput.length > 0){
        formoutput = formoutput + "</table>";
        document.getElementById("showInput").innerHTML = formoutput; 
    }
}
    //remove userinput 
    function removeReview(){
        document.getElementById("showInput").innerHTML = "";
}

//displays alert box when necessary js portion
function showAlert() {
    var alertBox = document.getElementById("alert-box"); 
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none"; 
    }
}

//validate everything on form
function validateEverything(){
    let valid = true; 

    if (!validateFname()){
        valid = false; 
    }

    if (!validateMinit()){
        valid = false; 
    }

    if (!validateLname()){
        valid = false; 
    }

    if (!validateDob()){
        valid = false; 
    }

    if (!validateSsn()){
        valid = false; 
    }

    if (!validateAddress1()){
        valid = false; 
    }

    if (!validateCity()){
        valid = false; 
    }

     if (!validateZcode()){
        valid = false; 
    }

     if (!validateEmail()){
        valid = false; 
    }

     if (!validatePhnum()){
        valid = false; 
    }

     if (!validateUname()){
        valid = false; 
    }

     if (!validatePword()){
        valid = false; 
    }

     if (!confirmPword()){
        valid = false; 
    }

    if (valid){
        document.getElementById("submit").disabled = false; 
    } else {
        showAlert();
    }
}