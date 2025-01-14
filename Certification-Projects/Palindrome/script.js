const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

const checkPalindrome = (text) => {
  const cleanedText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedText = cleanedText.split('').reverse().join('');
  return cleanedText === reversedText;
};

checkBtn.addEventListener("click", () => {
  const inputValue = textInput.value;
  if (inputValue === "") {
    alert("Please input a value");
  } else {
    const isPalindrome = checkPalindrome(inputValue);
    result.innerText = `${inputValue} ${isPalindrome ? "is" : "is not"} a palindrome.`;
  }
});
