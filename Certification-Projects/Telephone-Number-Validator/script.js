const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const validateRegex = phoneNumber => {
    const regex = /^\s*([1]\s*)?(\([0-9]{3}\)\s*-?\s*[0-9]{3}\s*-?\s*[0-9]{4}|[0-9]{3}\s*-?\s*[0-9]{3}\s*-?\s*[0-9]{4})\s*$/;
    return regex.test(phoneNumber);
};
const validPhoneNumber = phoneNumber => validateRegex(phoneNumber) ? `Valid US number: ${phoneNumber}` : `Invalid US number: ${phoneNumber}`;


checkBtn.addEventListener("click", () => {
    const phoneNumber = userInput.value;
    const isValid = validPhoneNumber(phoneNumber);
    if(userInput.value !== ""){
        resultsDiv.innerText = isValid;
        console.log(isValid);
    }else if(userInput.value == ""){
        alert("Please provide a phone number");
    }
});

clearBtn.addEventListener("click", () => {
    userInput.value = "";
    resultsDiv.innerText = "";
});
