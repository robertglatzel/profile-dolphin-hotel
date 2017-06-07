//First I will create variables out of the input fields.
var firstName = document.getElementById("firstName")
var lastName = document.getElementById("lastName")
var phoneNumber = document.getElementById("phoneNumber")
var emailInput = document.getElementById("emailInput")

//getting the input for the selectable inputs.
var genderInput = document.getElementsByClassName("gender")
var colorInput = document.getElementsByClassName("userColor")
var drinkInput = document.getElementsByClassName("userDrink")


//assigning the submitButton function
var submitBtn = document.getElementById("submitButton")
submitBtn.addEventListener('click', submitButton, false);


function submitButton() {
	//here I'' grab the values of the inputs and then input them into the results section.
	var fnInput = firstName.value
	var lnInput = lastName.value
	var pnInput = phoneNumber.value
	var eInput = emailInput.value
	var userGender, userColor, userDrink;
	var validEmail = false;
	var validPhone = false;


	// Name validation 

	//first name
	if(fnInput == ""){
		alert("You need to fill in your first name!")
		return
	}

	//last name 
	if(lnInput == ""){
		alert("You need to fill in your last name!")
		return
	}


	// This loops through the color selections to see which was picked. Then reassigns it to the blank variable above, which i can then add to the document.

	// This loops through the gender.
	for (var i = 0; i < genderInput.length; i++) {
		if(genderInput[i].checked){
			userGender = genderInput[i].value;
		};
	};

	if(userGender == undefined){
		alert("You haven't selected your color!")
		//return cancels the submit button, until the condition is met.
		return;
	}

	//phone number validation 

	function validatePhone(){
		var regEx = /^[0-9-()]{10,14}$/
		if((regEx.test(pnInput)) == true){
			validPhone = true;
			return;
		}
	}
	
	validatePhone()
	if (validPhone == false) {
		alert('Please enter a valid phone number.')
		return;
	}

	//Validate the email

	function validateEmail(){
		var regEx = /^[a-z0-9._%]+@[a-z0-9.-]+\.[a-z]{2,5}$/
		if((regEx.test(eInput)) == true){
			validEmail = true;
			return;
		}
	}
	
	validateEmail()
	if (validEmail == false) {
		alert('Please enter a valid email address.')
		return;
	}


	// This loops through color.
	for (var i = 0; i < colorInput.length; i++) {
		if(colorInput[i].selected){
			userColor = colorInput[i].value;
		};
	};

	if(colorInput == undefined){
		alert("You haven't selected your color!")
		return;
	}

	// This loops through the continents.
	for (var i = 0; i < drinkInput.length; i++) {
		if(drinkInput[i].checked){
			userDrink = drinkInput[i].value;
		};
	};

	if(userDrink == undefined){
		alert("You haven't selected your continent!")
		return;
	}

	//This will hide the previous form, and display only the new material.


	document.getElementById("questions").style.display = "none"
	document.getElementById("intro").style.display = "none"

	document.getElementById("complete").style.visibility = "visible"
	document.getElementById("results").style.visibility = "visible"



	var results = document.getElementById("results")
	//Inserting the name
	var newName = document.getElementById("newUserName")
	newName.textContent = "Name: " + fnInput + " " + lnInput
	//inserting gender
	var newGender = document.getElementById("newUserGender")
	newGender.textContent = "Gender: " + userGender
	//inserting phone number
	var newPhone = document.getElementById("newUserPhone")
	newPhone.textContent = "Phone Number: " + pnInput
	//inserting email
	var newEmail = document.getElementById("newUserEmail")
	newEmail.textContent = "Email Address: " + eInput
	//inserting color
	var newColor = document.getElementById("newUserColor")
	newColor.textContent = "Favorite Color: " + userColor

	var newDrink = document.getElementById("newUserDrink")
	newDrink.textContent = "Beverage Preference: " + userDrink
}


