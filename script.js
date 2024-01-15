const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultElement = document.getElementById("result");

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  const day = currentDate.getDate() - birthdayDate.getDate();

  if (month < 0 || (month === 0 && day < 0)) {
    age--;
  }

  return age;
}

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultElement.innerText = `Your age is ${age} ${
      age > 1 ? "years" : "year"
    } old`;
  }
}

btnEl.addEventListener("click", calculateAge);
